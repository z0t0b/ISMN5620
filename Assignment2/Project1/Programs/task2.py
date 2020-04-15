def createArray():
    a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for i in range(10):
        try:
            a[i] = float(input("[#] Please enter a number: "))
        except ValueError:
            a[i] = 0
            print("[!] Invalid value entered!")
    return a

def lessThanInput(value, oldArray):
    newList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    j = 0
    for i in range(10):
        if(value > oldArray[i]):
            newList[j] = oldArray[i]
            j += 1
    return newList[0:j]

def main():
    print("[#] Please enter 10 numbers (will default to value 0 if string or nothing is entered)...")
    a = createArray()
    num = float(input("[#] Please enter a number to find all values in the list that are less than it: "))
    newList = lessThanInput(num, a)
    print("[!] All numbers in the list that are smaller than your input are: ", newList)

main()
