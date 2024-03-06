/**

 Copyright 2023 Harshad Joshi and Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/


module.exports = function(RED) {
    function PeakValueRangeNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        // Retrieve configuration values
        var min = parseFloat(config.min) || 0;
        var max = parseFloat(config.max) || 100;
        var status = false; //use this to display test status on dashboard

        // Initialize peak value
        var peakValue = null;

        node.on('input', function(msg) {
            // Filter out values outside the range
            if (msg.payload >= min && msg.payload <= max) {
                // If peakValue is not initialized, set it to the first valid value
                if (peakValue === null) {
                    peakValue = msg.payload;
                    status = true;
                }
                // Find the peak value
                else if (msg.payload > peakValue) {
                    peakValue = msg.payload;
                    status = true;
                }
            }
            // Send the peak value alongwith other node parameters and status 
            node.send({payload:{peakValue,min,max,status}});
        });
    }
    RED.nodes.registerType("peak-value-range", PeakValueRangeNode);
}

