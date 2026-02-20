arquivo_caracteres = open('./0059_cipher.txt', 'r')
conteudo_caracteres = arquivo_caracteres.read()
array_caracteres = conteudo_caracteres.split(",")
array_numeros = [int(char) for char in array_caracteres]

senha = []

for caractere_possivel in range(0, 3):
    print(f"Caracteres possíveis de {caractere_possivel}")
    for possibilidade in range(97, 123):
        passou = True

        for i in range(caractere_possivel, len(array_numeros), 3):
            num = array_numeros[i]
            teste_xor = possibilidade^num

            if teste_xor < 32 or teste_xor > 125 or (teste_xor >= 94 and teste_xor <= 96):
                passou = False
                break

        if passou:
            print(f"    {chr(possibilidade)}")
            senha.append(possibilidade)

print("\n\n==============================================\n")
soma = 0
j = 0
for i in range(0, len(array_numeros)):
    num = array_numeros[i]
    resultado_xor = senha[j]^num

    print(chr(resultado_xor), end="")

    j += 1

    if j == 3:
        j = 0

    soma += resultado_xor

print(f"\n\nResposta: {soma}")
