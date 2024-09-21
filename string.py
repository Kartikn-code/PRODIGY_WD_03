# type: ignore

'''input="abcda0099090"
i=0
count=0
for i in input:
        y=input.find('a',beg=0,end=len(input))
    #if (i==input2):
      #  count+=1
        print(y)'''  

input="abcda0099090"
char_indices = []
for i, c in enumerate(s):
    if c in char_indices:
        char_indices[c].append(i)
    else:
        char_indices[c] = [i]
        min_distance = float('inf')
        for char, indices in char_indices.items():
            if len(indices) > 1:
                distance = indices[1] - indices[0]
            if distance < min_distance:
                min_distance = distance

            if min_distance == float('inf'):
                return -1  # or raise an exception, depending on your requirements
return min_distance