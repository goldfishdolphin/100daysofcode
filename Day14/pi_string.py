

#Large Files: One Million Digits
filename = 'pi_million_digits.txt'

with open(filename) as file_object:
    lines=file_object.readline()

pi_string = ''
for line in lines:
    pi_string += line.strip()

birthday = input("Enter your birthday, in the form mmddyy:")
if birthday in pi_string:
    print("Your birtday appears in first million digits of pi!")
else:
    print("Your birtday does not appear in first million digits of pi!")

