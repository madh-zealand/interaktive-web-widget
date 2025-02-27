# Interaktiv Web Widget

Du skal udvikle en interaktiv widget, der tilføjer dynamisk funktionalitet til en hjemmeside. En widget er en lille, selvstændig komponent, der kan manipulere DOM’en og skabe interaktion for brugeren.

Hver studerende vælger én widget fra listen nedenfor, og hver widget kan kun vælges af én person. For at spare tid på opsætning starter du med en færdig template, som du henter til dit eget GitHub-repository og arbejder videre med derfra.

Formålet er at lære at bruge JavaScript til at opdatere hjemmesidens indhold dynamisk, håndtere brugerinteraktioner og arbejde med versionsstyring i GitHub.

## Projektstruktur

Dette projekt indeholder en grundstruktur, som du kan arbejde videre på. Betragt det som et udgangspunkt – du må gerne ændre og tilpasse koden, som det giver mening for dit widget.

---  

## Mulige widgets

Alle skal vælge hver sit widget at arbejde på.
Her er en liste over widgets med krav og ekstra udfordringer.

---  

### 1. To-Do Liste
#### Krav:
- Brugeren kan tilføje opgaver
- Opgaver kan slettes igen
- Listen vises på skærmen
- Gemmes i `localStorage`, så den huskes efter refresh

#### Ekstra udfordringer:
- Mulighed for at markere opgaver som færdige
- Knapper til at sortere opgaver alfabetisk eller efter status
- Brug CSS-animationer til at vise tilføjelser og sletninger

---  

### 2. Farvegenerator
#### Krav:
- Viser 5 tilfældige farver i en palette
- En knap genererer helt nye tilfældige farver
- Mulighed for kun at generere en ny tilfældig farve for én farve i paletten
- Viser de genererede farvekoder
- Mulighed for at kopiere farvekoden til clipboard

#### Ekstra udfordringer:
- Mulighed for at låse bestemte farver og generere resten
- Tilføj en funktion til at gemme favoritfarvepaletter i `localStorage`
- Mulighed for manuelt at ændre en farve i paletten

---  

### 3. Tidsnedtælling
#### Krav:
- Brugeren kan indstille en timer (i sekunder eller minutter)
- Når tiden er gået, vises en besked
- En knap starter og stopper nedtællingen

#### Ekstra udfordringer:
- Tilføj en lydnotifikation, når tiden er gået
- Animer tiden visuelt med en progress bar
- Tilføj en knap til at pause nedtællingen

---  

### 4. Quote Generator
#### Krav:
- Viser et tilfældigt citat fra en liste
- En knap genererer et nyt citat
- Mulighed for at gemme citater som favoritter i `localStorage`
- Viser alle gemte citater fra `localStorage`

#### Ekstra udfordringer:
- Hent citater fra en API med `fetch` (f.eks. https://zenquotes.io/api/random)
- Brug CSS-animationer til at fade teksten ind og ud
- En knap, der erstatter ord i citatet ud fra en fast liste (f.eks. "yes" → "no", "more" → "nothing", "free" → "imprisoned") for at lave sjove variationer

---  

### 5. Simple Quiz
#### Krav:
- Viser et spørgsmål med 2-4 svarmuligheder
- Brugeren vælger et svar
- Viser om svaret er rigtigt eller forkert

#### Ekstra udfordringer:
- Hold styr på point og vis en score
- Tilføj flere spørgsmål i en række og lav et quiz-forløb
- Hent spørgsmål fra en API med `fetch` (f.eks. https://opentdb.com/api_config.php)

---  

### 6. Gæt et tal
#### Krav:
- Computeren vælger et tilfældigt tal mellem f.eks. 1-100
- Brugeren skal gætte tallet
- Giver feedback om gættet er for højt eller lavt

#### Ekstra udfordringer:
- Begræns antallet af forsøg
- Gem highscore i `localStorage`
- Vis en grafisk repræsentation af gæt-historikken
- Lav det til et 2-player spil, hvor man skiftes til at gætte, og den der gætter rigtigt først vinder

---  

### 7. Counter
#### Krav:
- En tæller, der starter på 0
- Knapper til at tælle op og ned
- Knapper der tæller i steps af 5, 10 og et tilfældigt tal mellem 1 og 100
- Viser den seneste ændring af tallet (f.eks. +5, -10, +1)

#### Ekstra udfordringer:
- Tilføj en reset-knap
- Vis en liste over alle ændringer af tallet
- Gør tallet rødt, hvis det er ulige, og sort, hvis det er lige

---  

### 8. Emoji Reaktioner
#### Krav:
- Brugeren kan vælge mellem tre emoji-reaktioner (f.eks. 😃😐😢)
- Viser, hvor mange gange hver emoji er valgt
- Gør emojis større eller mindre afhængigt af hvor mange reaktioner der er

#### Ekstra udfordringer:
- Tilføj flere emojis og muligheden for at vælge selv
- Tæl ned på en reaktion, hvis man Ctrl/Cmd+klikker på den
- Tilføj en animations-effekt, f.eks. at emojis hopper lidt, når de bliver valgt

---  

### 9. Bogmærkeliste
#### Krav:
- Brugeren kan tilføje links til en liste
- Klikbare links vises på siden
- Links kan slettes fra listen
- Gemmes i `localStorage`

#### Ekstra udfordringer:
- Tilføj et felt til at give links en titel
- Sortér listen alfabetisk eller efter tilføjelsestidspunkt
- Gør det muligt at redigere et bogmærke

---  

### 10. Lommeregner
#### Krav:
- Brugeren kan indtaste to tal
- Kan vælge mellem +, -, * og /
- Viser resultatet dynamisk

#### Ekstra udfordringer:
- Tilføj en historikfunktion, der viser tidligere beregninger
- Understøt flere tal og mere avancerede beregninger
- Tilføj tastaturgenveje, så brugeren kan taste tal og operatorer direkte på keyboardet
