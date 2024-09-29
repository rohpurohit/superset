import os

def list_dockerfiles(directory):
    dockerfiles = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file == "Dockerfile":
                dockerfiles.append(os.path.join(root, file))
    return dockerfiles

if __name__ == "__main__":
    directory = "."  # Change this to the desired directory
    dockerfiles = list_dockerfiles(directory)
    for dockerfile in dockerfiles:
        print(dockerfile)
