import nltk
nltk.download('punkt')
from nltk.tokenize import sent_tokenize, word_tokenize

with open("text.txt", "r", encoding='utf-8') as f:
    data = f.readlines()

mystring = ' '.join(data)
print(mystring)

input_sent =sent_tokenize(mystring)
input_tokens= word_tokenize(mystring)


with open("original.txt", "r", encoding='utf-8') as f:
    original_data = f.readlines()

mystring2 = ' '.join(original_data)
print(mystring2)

original_sent= sent_tokenize(mystring2)
original_token=word_tokenize(mystring2)


data = [mystring,mystring2]

from sklearn.feature_extraction.text import CountVectorizer

count_vectorizer = CountVectorizer()
vector_matrix = count_vectorizer.fit_transform(data)
vector_matrix

print(vector_matrix.toarray())
print("input",original_token)
a =[]
x = []
for i in range(len(input_tokens)):
    inp = original_token[i]
    print("input : ",inp)
    out = input_tokens[i]
    print("output : ",out)
    if inp == out:
        print("matched")
        x.append(out)
    else:
        print("missing")
        a.append(out)

if len(input_tokens) != len(original_token):
    print("please recite complete surah")

print(f"Unmatch Words:",a)
d = len(input_tokens)+len(original_token)
b = len(x)
c = len(original_token)
print(f"Match Percentage: {round((b/c)*100)}%")
