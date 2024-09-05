import ctypes
import pathlib

if __name__ == "__main__":
    # Load the shared library into ctypes
    libname = pathlib.Path().absolute() / "square.so"
    c_lib = ctypes.CDLL(libname)

    print(type(c_lib))
    print(c_lib.square(10))
