# express-blog-routing

## Esercizio

Creare un file di routing `routers/posts.js` che conterrà le rotte necessarie per l'entità post.

All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)

Tutte le risposte saranno dei testi che confermeranno l'operazione che il server deve eseguire, secondo le convenzioni REST.

Ad esempio:

- `GET /posts` → "Lista dei post"
- `DELETE /posts/1` → "Cancellazione del post 1"

Registrare il router dentro `app.js` con il prefisso `posts/`.

### Bonus

- Restituire la lista dei post dalla rotta index in formato JSON
- Restituire un singolo post dalla rotta show in formato JSON

---

## Indice

- [Installazione](#installazione)
- [Avvio](#avvio)
- [Script disponibili](#script-disponibili)
- [Stack](#stack)
- [Struttura del progetto](#struttura-del-progetto)
- [Roadmap](#roadmap)

## Installazione

```bash
npm install
```

## Avvio

```bash
npm run watch
```

## Script disponibili

| Comando | Descrizione |
| --- | --- |
| `npm start` | Avvia il server |
| `npm run watch` | Avvia il server con auto-reload |

## Stack

- Node.js
- Express

## Struttura del progetto

```text
.
├─ routers/
│  └─ posts.js
├─ app.js
├─ package.json
└─ README.md
```

## Roadmap

- [x] Setup base (app.js + Express)
- [ ] Creare il router `routers/posts.js`
- [ ] Definire le rotte CRUD per i post
- [ ] Registrare il router in `app.js`
- [ ] Bonus: rotta index con JSON
- [ ] Bonus: rotta show con JSON
