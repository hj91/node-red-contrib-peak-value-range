# Node-RED Peak Value Range Node

This Node-RED node, named "peak-value-range," filters input values within a specified range and calculates the first peak value within that range.

## Description

The "peak-value-range" node filters incoming values to ensure they fall within a specified range (minimum and maximum). It then calculates the first peak value within that range and emits it as output. This node is useful for finding the highest value within a specified range of analog or numerical data.

## Installation

To install the "peak-value-range" node in your Node-RED environment, you can use the Manage Palette feature or manually copy the node files to your Node-RED nodes directory.

1. **Using Manage Palette (Recommended):**
   - Open your Node-RED instance.
   - Click on the menu icon in the top-right corner and select "Manage palette."
   - Go to the "Install" tab, search for "peak-value-range," and click "install."

2. **Manual Installation:**
   - Copy the "peak-value-range.js" and "peak-value-range.html" files to your Node-RED nodes directory (usually located at `~/.node-red/nodes`).

## Usage

1. Drag and drop the "peak-value-range" node from the Node-RED palette onto your workspace.
2. Configure the node by setting the minimum and maximum values for filtering.
3. Connect the "peak-value-range" node to an input source that provides analog or numerical data.
4. Deploy your flow.
5. The "peak-value-range" node will calculate the first peak value within the specified range and emit it as output.

## Configuration

- **Minimum Value**: The minimum value for filtering input data. Values below this threshold will be ignored.
- **Maximum Value**: The maximum value for filtering input data. Values above this threshold will be ignored.

## License

This Node-RED node is licensed under the [GPL-3.0 License](LICENSE).

## Author

Harshad Joshi @ Bufferstack.IO Analytics Technology LLP, Pune
