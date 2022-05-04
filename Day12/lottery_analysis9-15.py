from random import choice
list = [1,2,3,4,5,6,7,8,9,0, 'a', 'c', 'y', 'z']

random_numbers=[]
for random_number in range(4):
    random_number=choice(list)
    random_numbers.append(random_number)

print(f"The Winning Ticket:{random_numbers[0]}{random_numbers[1]}{random_numbers[2]}{random_numbers[3]},")

