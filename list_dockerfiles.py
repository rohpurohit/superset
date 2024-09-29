import os

def list_dockerfiles():
    dockerfiles = [f for f in os.listdir('.') if f.startswith('Dockerfile')]
    for dockerfile in dockerfiles:
        print(dockerfile)

if __name__ == "__main__":
    list_dockerfiles()
