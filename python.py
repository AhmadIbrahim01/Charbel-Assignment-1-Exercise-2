# Exercise 2 using python
x = int(input("Enter x: "))

for i in range(1, x+1):
    number = 1  
    for j in range(i):
        print(number,end=" ")
        number += 2
    print()
