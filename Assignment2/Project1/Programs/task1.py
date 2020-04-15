from sys import exit

def largestOfThree(a, b, c):
    if(a >= b and a >= c):
        largest = a
    elif(b >= a and b >= c):
        largest = b
    else:
        largest = c
    return largest

def main():
    print("### task1.py ###")
    try:
        a = float(input("[#] Please enter the first number: "))
        b = float(input("[#] Please enter the second number: "))
        c = float(input("[#] Please enter the third number: "))
    except ValueError: # User inputs something other than a number
        print("[!] ERROR: Not a number!!")
        print("[!] Terminating Program...")
        exit(0) # Exit the program
    print("[#] Processing.....")
    largest = largestOfThree(a, b, c)
    print("[!] The largest number is: ", largest)
    print("### Ending Program ###")

main()