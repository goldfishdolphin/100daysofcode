from random import choice
list = [10,20,30,40,50,60,70,80,90,99, 'a', 'c', 'y', 'z']

random_numbers=[]
for random_number in range(4):
    random_number=choice(list)
    random_numbers.append(random_number)

print(f"The Winning Ticket:{random_numbers[0]}{random_numbers[1]}{random_numbers[2]}{random_numbers[3]},")

