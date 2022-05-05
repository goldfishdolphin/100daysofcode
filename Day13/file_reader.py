#Reading Line by Line
from fileinput import filename


filename = 'pi_digits.txt'

with open(filename) as file_object:
    for line in file_object:
        print(line.rstrip())

#Making a list of Lines from a File
        filename = 'pi_digits.txt'

with open(filename) as file_object:
    lines = file_object.readlines()


for line in lines:
        print(line.rstrip())
