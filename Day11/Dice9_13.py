from random import randint
class Die:
    '''A simplr attempt to represent a die.'''

    def __init__(self, sides=6):
        '''Intialize the attribute of a die.'''
        self.sides = sides

    def roll_die(self):
        '''Represent a method to get a random number on  a die.'''
        return randint(1,self.sides)
# Make a 6 sided die and roll it for 10 times.
d6=Die()
"""Return the random number on the die for 10 times."""
results=[]
for roll_num in range(10):
    result=d6.roll_die()
    results.append(result)

print("\n10 rolls of a 6 sided die:")
print(results)

# Make a 10 sided die and roll it for 10 times.
d10=Die(sides=10)
results=[]
for roll_num in range(10):
    result=d10.roll_die()
    results.append(result)

print("\n10 rolls of a 10 sided die:")
print(results)

# Make a 20 sided die and roll it for 10 times.
d20=Die(sides=20)
results=[]
for roll_num in range(10):
    result=d20.roll_die()
    results.append(result)

print("\n10 rolls of a 20 sided die:")
print(results)



    