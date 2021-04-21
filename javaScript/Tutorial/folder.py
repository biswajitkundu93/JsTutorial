import os

base_path = os.getcwd()

for i in range(1,67):

    if not os.path.exists('tut'+str(i)):

        os.mkdir('tut'+str(i))
        new_dir_path = os.path.join(base_path,'tut'+str(i))
        os.chdir(new_dir_path)

        with open ('index.html','w') as f:
            content = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="tut'+str(i)+'.css"><title>tut'+str(i)+'</title></head><body><script src="tui'+str(i)+'.js"></script></body></html>'
            f.write(content)
        open('tut'+str(i)+'.js', 'w')
        open('tut'+str(i)+'.css', 'w')

        os.chdir(base_path) 

    else:
        print('file exists: tut'+str(i))
