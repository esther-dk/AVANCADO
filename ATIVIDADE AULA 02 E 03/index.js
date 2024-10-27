// Importa o módulo HTTP para criar um servidor web
const http = require('http');

// Importa o módulo File System (FS) para ler arquivos do sistema
const fs = require('fs');

// Cria um servidor HTTP
const server = http.createServer((req, res) => {
    
    // Exibe no console a URL requisitada pelo cliente
    console.log(req.url);

    // Verifica se a requisição é um método GET e se a URL é a raiz ('/')
    if (req.method === 'GET' && req.url === '/') {
        
        // Lê o arquivo 'index.html' de forma assíncrona
        fs.readFile(
            './index.html',                      // Caminho do arquivo
            { encoding: 'utf-8', flag: 'r' },    // Opções de leitura: UTF-8 para encoding e flag 'r' para leitura
            function (err, d) {                  // Função de callback que é chamada após a leitura
                if (!err) {                      // Se não houver erro...
                    res.writeHead(200, { 'Content-Type': 'text/html' }); // Envia o cabeçalho HTTP com status 200 e o tipo de conteúdo (HTML)
                    res.write(d);                // Escreve o conteúdo do arquivo 'index.html' na resposta
                    console.log(d);              // Exibe o conteúdo do arquivo no console
                    res.end();                   // Finaliza a resposta
                }
            }
        );
    
    } else {
        // Se a URL não for a raiz ('/'), tenta carregar a página 404

        // Lê o arquivo '404.html' de forma assíncrona
        fs.readFile(
            './404.html',                       // Caminho do arquivo
            { encoding: 'utf-8', flag: 'r' },   // Opções de leitura: UTF-8 para encoding e flag 'r' para leitura
            function (err, d) {                 // Função de callback que é chamada após a leitura
                if (!err) {                     // Se não houver erro...
                    res.writeHead(200, { 'Content-Type': 'text/html' }); // Envia o cabeçalho HTTP com status 200 e o tipo de conteúdo (HTML)
                    res.write(d);               // Escreve o conteúdo do arquivo '404.html' na resposta
                    res.end();                  // Finaliza a resposta
                }
            }
        );
    }
});

// Define a porta onde o servidor vai escutar
const portaDoservidor = 3030;

// Faz o servidor começar a escutar na porta especificada
server.listen(portaDoservidor, () => {
    // Exibe uma mensagem no console indicando que o servidor está funcionando
    console.log(`Porta: ${portaDoservidor}!`);
});

