with open("adjectives.txt", "r") as file:
    adjectives = list(set(file.readlines()))
    adjectives.sort()
    file.close()

with open("adjectives.txt", "w+") as file:
    for adjective in adjectives:
        file.write(adjective)
    file.close()

with open("nouns.txt", "r") as file:
    nouns = list(set(file.readlines()))
    nouns.sort()
    file.close()

with open("nouns.txt", "w+") as file:
    for noun in nouns:
        file.write(noun)
    file.close()

