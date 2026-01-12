import pandas as pd

# 读取文件（制表符分隔）
file_path = r'C:\Users\11312\Desktop\claude code\test-skills\data.xlsx'
df = pd.read_csv(file_path, sep='\t')

print("原始数据:")
print(df.to_string())
print(f"\n原始行数: {len(df)}")
print(f"重复行数: {df.duplicated().sum()}")

# 1. 去除完全重复的行
df_cleaned = df.drop_duplicates()

# 2. 去除字符串字段中的前后空格，并将内部多个空格合并为一个
for col in df_cleaned.select_dtypes(include=['object']).columns:
    df_cleaned[col] = df_cleaned[col].str.strip()  # 去除前后空格
    df_cleaned[col] = df_cleaned[col].str.replace(r'\s+', ' ', regex=True)  # 多空格合并为单空格

print("\n\n清理后数据:")
print(df_cleaned.to_string())
print(f"\n清理后行数: {len(df_cleaned)}")
print(f"删除的重复行数: {len(df) - len(df_cleaned)}")

# 保存回原文件
df_cleaned.to_csv(file_path, sep='\t', index=False)

print("\n已保存到原文件!")