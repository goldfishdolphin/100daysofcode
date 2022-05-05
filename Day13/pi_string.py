#Working with a File's Content

filename = 'pi_digits.txt'

with open(filename) as file_object:
    lines = file_object.readlines()

pi_string =''
for line in lines:
    pi_string += line.strip()
    

print(pi_string)
print(len(pi_string))

#Large Files: One Million Digits
filename = 'pi_million_digits.txt'

with open(filename) as file_object:
    lines=file_object.readline()

pi_string = ''
for line in lines:
    pi_string += line.strip()

print(f"{pi_string[:52]}...")
print(len(pi_string))