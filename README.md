Программа из командной строки запускается: 
пример кодирования node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt" 
пример декодирования node my_caesar_cli -a decode -s 7 -o "./input.txt" -i "./output.txt" (стоит очистить файл input.txt так как он будет перезаписан)

команды и аргументы:
-s, --shift: число для сдвига символов
-i, --input: файл входа
-o, --output: файл выхода
-a, --action: выбор действия encode - кодирование, decode - декадирование.

