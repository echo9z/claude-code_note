import sys
from collections import Counter
import re

def analyze_text(text):
    words = re.findall(r'\w+', text.lower())
    print(f"Total words: {len(words)}")
    print(f"Top 5 words: {Counter(words).most_common(5)}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        analyze_text(sys.argv[1])
    else:
        print("No text provided.")