my_file = "learning_python.txt"

with open (my_file) as my_object:
    contents = my_object.read()

print(contents)

# With loop
with open (my_file) as my_object:
    for line in  my_object.read():
        print(line)
