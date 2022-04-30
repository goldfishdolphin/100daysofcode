#import an Entire Module
import car

my_beetle = car.Car('volkswagen', 'beetle', 2019)
print(my_beetle.get_descriptive_name())

my_tesla = car.ElectricCar('tesla', 'roadster', 2019)
print(my_tesla.get_descriptive_name())


'''Importing a module into a module.'''
from car import Car
from electric_car import ElectricCar
my_beetle = Car('volkswagen', 'beetle', 2019)
print(my_beetle.get_descriptive_name())
my_tesla = ElectricCar('tesla', 'roadster', 2019)
print(my_tesla.get_descriptive_name())

'''Using Aliases'''
from electric_car import ElectricCar as EC
my_tesla = EC('tesla', 'roadster', 2019)
print(my_tesla.get_descriptive_name())