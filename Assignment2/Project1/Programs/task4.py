file1 = open("../resources/primenumbers.txt", "r")
file2 = open("../resources/happynumbers.txt", "r")
overlappedNums = [None]*1000 # Placeholder values

def main():
	print("### task4.py ###")
	print("[#] Reading files...")
	file1Array = file1.readlines()
	file2Array = file2.readlines()
	
	# Compare number in primenumbers file with each number in happynumbers file
	# to try and find a match
	for primeNum in range(0, len(file1Array)):
		for happyNum in range(0, len(file2Array)):
			if(file1Array[primeNum] == file2Array[happyNum]):
				overlappedNums.append(file1Array[primeNum])
	
	# Filter the None values from the list into a new list, then close the files
	newOverlappedNums = list(filter(None.__ne__, overlappedNums))
	file1.close()
	file2.close()
	print("[!] The numbers that appear in both files are:")
	for value in newOverlappedNums:
		print("[#] " + value.rstrip()) # Strips the trailing new line from each value
	print("[!] Terminating program...")

main()