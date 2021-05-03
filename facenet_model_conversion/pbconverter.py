import tensorflow as tf
from google.protobuf import text_format
from tensorflow.python.platform import gfile

def pbtxt_to_graphdef(filename):
  with open(filename, 'r') as f:
    graph_def = tf.GraphDef()
    file_content = f.read()
    text_format.Merge(file_content, graph_def)
    tf.import_graph_def(graph_def, name='')
    tf.train.write_graph(graph_def, 'pbtxt/', 'facenet_converted.pb', as_text=False)


pbtxt_to_graphdef("facenet_frozen.pbtxt")