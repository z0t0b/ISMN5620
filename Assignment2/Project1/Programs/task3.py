def reverseString(string):
    reverseString = [0]*len(string)
    j = len(string) - 1
    for x in range(0, len(string)):
        reverseString[j] = string[x]
        j -= 1
    if("".join(reverseString) == string): return True
    return False

def main():
    print("### task3.py ###")
    string = str(input("[#] Please enter a string: "))
    reversedStringBool = reverseString(string)
    if(reversedStringBool):
        print("[!] The string is a palindrome!")
    else:
        print("[!] The string is not a palindrome!")
    print("[!] Terminating program...")

main()