---
tags: [klassemateriell, lom, md]
indeksert: 2026-09-21
---
[LES_MEG.md](https://github.com/user-attachments/files/32325498/LES_MEG.md)
# LØM Læringsapp — slik er den bygd, og slik endrer du den

Fagskolen Oslo, Avdeling Elkraft · Glenn Rémi Sundbakken · versjon 1.0, 17. september 2026

Nytt i 1.0: alle 30 kapitler er revidert etter samme mal som kap. 10 — fotnoter på avledede tall (hva tallet er, netto eller brutto, utregning og kilde), hint på alle 447 flervalgsspørsmål, 68 figurer i spørsmålene, presise formler og språkvask. Søket på forsiden er bygget om: det leter nå i teori, begreper, formler, læringsmål, kalkulatorer, vurderingsoppgaver og eksamensoppgaver i alle kapitler (778 oppføringer), viser trefftype, kapittel og et utdrag med søkeordet uthevet, og hopper rett til avsnittet i kapitlet når du klikker. Varelinjetabellen i tilbudskalkulatoren har fått faste kolonnebredder og låst beskrivelseskolonne, så teksten ikke lenger flyter i hverandre.

Nytt i 0.9: hint i Øv — hvert flervalgsspørsmål har knappen «Vis hint». Skriv feltet `hint: "…"` på spørsmålet i kapittelfila; mangler det, finner appen selv formelen, begrepet eller teoriavsnittet som passer ordene i spørsmålet. Spørsmål kan ha en liten figur: `figur: { type: "kontantstrom", ks: [-480000, 170000, 170000] }` eller `figur: { type: "soyler", data: [{ navn, verdi }] }`. Søylediagrammene i kalkulatorene har fått grupperte søyler (Nordlys mot norm), etiketter som brytes over to linjer, og svevetekst med formel når musen holdes over en søyle. Hint og figur finnes bare i Øv, ikke i Prøv eller Eksamen.

Nytt i 0.8: alle tallfelt i kalkulatorene viser tusenskilletegn (480 000) og godtar komma som desimaltegn. Innholdstekst kan ha fotnoter på tall: skriv `{{170 000|forklaring av hva tallet er, utregning og kilde}}` i en hvilken som helst tekststreng i `kilde/innhold/*.js`, så vises tallet med prikket understrek og forklaringen når studenten holder musen over eller trykker. Kap. 10 er pilot: alle avledede tall har fotnote, og det går fram om et tall er netto eller brutto og hvor det kommer fra.

Nytt i 0.7: ok10 (Investeringsanalyse) har fått en ny kalkulator «Nåverdi, avansert — kraftverk og lange investeringer», bygget på Prosjekt 6 – Minikraftverk. Levetid opp til 60 år, avkastningskrav som kan variere i perioder, og valgfri indeksregulering av inn-/utbetalinger. Ligger under samme kapittel som den vanlige nåverdikalkulatoren i «Se og regn».

## Hva studenten får

Én fil: `LOM_Laeringsapp.html`. Den åpnes ved dobbeltklikk i Edge, Chrome, Firefox eller Safari, uten internett og uten installasjon. Fremdrift (lest, øvd, prøveresultat) lagres i studentens egen nettleser på den PC-en fila åpnes fra.

Deling via Teams: last opp fila i klassens Teams-kanal (Filer). Teams/SharePoint viser ikke HTML-filer direkte — studenten velger «Last ned» og dobbeltklikker fila. Skal fila åpnes med ett klikk rett fra Teams, må den ligge på en nettadresse (for eksempel GitHub Pages); da limes lenken inn som fane i Teams. Samme fil fungerer begge steder.

## Mappa

| Sti | Hva | Rediger? |
|---|---|---|
| `LOM_Laeringsapp.html` | Den ferdige fila som deles med studentene | Nei — bygges av `bygg.py` |
| `bygg.py` | Limer alt i `kilde/` sammen til én fil | Sjelden |
| `publiser.py` | Bygger og legger fila ut på GitHub Pages (ett-klikks-lenke til Teams) | Ved hver publisering |
| `sjekk.py` | Synk-sjekk mot pensum-mappa: hvilke kapitler må leses på nytt, hvilke tall finnes ikke i pensum | Etter hver endring i pensum eller innhold |
| `sjekk_godkjent.json` | Tidsstempel for kapitler du har lest mot pensum (`sjekk.py --godkjenn`) | Nei |
| `publiser_oppsett.json` | Adressen til GitHub-repositoryet (lages av `publiser.py --oppsett`) | Nei |
| `publisering/` | Det som lastes opp til GitHub Pages: `index.html`, `manifest.webmanifest`, `sw.js`, ikoner og mappa `pensum/` | Nei — skrives av `bygg.py` og `pensum_publiser.py` |
| `pensum_publiser.py` | Speiler studentfilene (PDF og Excel) fra `LOM_Pensum_2026` til `publisering/pensum/` og skriver `kilde/innhold/00_filer.js` | Etter hver endring i pensum-mappa |
| `kilde/innhold/00_filer.js` | Fillista bak «Filer til kapitlet» (navn, type, dato, størrelse) | Nei — skrives av `pensum_publiser.py` |
| `kilde/pwa/` | Manifest, service worker og ikoner som gjør nettutgaven installerbar | Sjelden |
| `kilde/motor/pwa.js` | Knappen «Installer appen», registrering av service worker, oppdateringsvarsel | Sjelden |
| `kilde/innhold/00_struktur.js` | Tittel, versjon, lærer-PIN, antall spørsmål i prøve, beståttgrense, kapitteloversikt | Ja |
| `kilde/innhold/ok08.js` osv. | Ett kapittel per fil: teori, begreper, formler, flervalg, regneoppgaver, vurderingsoppgaver | Ja — det er her innholdet bor |
| `kilde/innhold/00_tall.js` | Tallgrunnlaget: Nordlys' resultat, balanse og nøkkeltall 2026 og bransjetallene, speilet fra faktaarket i `00_Felles` | Ja — når faktaarket endres (`sjekk.py` sier fra) |
| `kilde/innhold/00_katalog.js` | Vareutvalg til tilbudskalkulatoren (navn, spesifikasjon, enhet, listepris eks. mva, kildedato) | Ja — legg til egne varer |
| `kilde/motor/hjelp.js` | Felles hjelpere: glidebryterfelt, linjegraf, søylediagram, sorterbar tabell, tolker (fritekst → tall) og vedlegg (IndexedDB) | Sjelden |
| `kilde/motor/kalkulatorer.js` | `nullpunkt` og `tilbud` (med tolker, lagring og vedlegg) | Ved endringer |
| `kilde/motor/kalkulatorer2.js` | `regnskap`, `nokkeltall`, `timepris`, `knappfaktor`, `likviditet`, `naaverdi`, `prissetting` | Ved endringer |
| `kilde/motor/generator.js` | Spørsmålsgeneratoren: regnemaler per kapittel (`maler[<id>]`) og begrepsspørsmål fra alle kapitler | Legg til egne maler |
| `kilde/motor/telling.js` | Anonym bruksstatistikk (Supabase): sidevisninger per kapittel/fane/verktøy, hendelser (prøve levert, kalkulator, eksamensoppgave, spillmodus, aktiv 2/10/30 min). Kun fra nettadresse, aldri fra nedlastet fil | Sjelden |
| `kilde/motor/app.js` | Navigasjon, visning, øvelser, prøve, fremdrift, lærermodus | Ved nye funksjoner |
| `kilde/motor/app.css` | Farger, skrift, oppsett | Ved utseende |
| `kilde/mal.html` | Skallet fila settes inn i | Sjelden |
| `kilde/bilder/` | Tittelbilder (komprimert til ca. 60–100 kB per bilde) | Legg til `ok09.jpg` osv. |

## Endre innhold

1. Åpne kapittelfila i `kilde/innhold/` i Notepad, VS Code eller Obsidian.
2. Endre tekst, spørsmål eller svar. Hold deg til strukturen som allerede står der (anførselstegn og komma).
3. Kjør `python bygg.py` i mappa. Den skriver ny `LOM_Laeringsapp.html`.
4. Åpne fila og sjekk kapitlet.

Alle 30 kapitler har innholdsfil. Nytt kapittel (om pensum endres): kopier `ok08.js` til for eksempel `ok09.js`, endre `id: "ok09"` og innholdet. Kapitlet dukker opp automatisk på forsiden fordi `00_struktur.js` allerede lister alle 30 kapitler. Kapitler uten innholdsfil vises som «Kommer».

Feltene i en kapittelfil:

| Felt | Brukes i | Merknad |
|---|---|---|
| `ingress`, `bilde`, `kilde` | Toppen av kapitlet | `bilde` må finnes i `kilde/bilder/` |
| `krok`, `laeringsmaal`, `teori`, `formler`, `begreper`, `sjekkDegSelv` | Fanen Les | `ref` på hvert teoriavsnitt viser bokhenvisning |
| `avvik` | Kun lærermodus | Avvik i læreboka fra avviksregisteret. Vises aldri for studenter. |
| `kalkulator` eller `kalkulatorer` | Fanen Se og regn | Navn på én funksjon, eller en liste (`["timepris", "tilbud"]`), fra kalkulatorfilene; utelat for kapitler uten regning |
| `flervalg` | Øv og Prøv | `riktig` er indeks fra 0; `forklaring` vises som begrunnelse |
| `regne` | Øv | `toleranse` er godtatt avvik fra `svar` |
| `refleksjon`, `vurderingsnokkel` | Øv | Vurderingsoppgaver uten fasit; momenter kan vises av studenten |
| `eksamen` | Fanen Eksamen | Del C fra øvingsheftet: `tittel`, `tid`, `rolle`, `case` (avsnitt), `bygger`, `regneark`, `felle`, `losning` (overskrift + tekst, «bestått vs. godt»), `kilde`. Studenten skriver eget svar (lagres lokalt) før løsningsforslaget vises |

## Fanen Eksamen (Del C)

Hvert kapittel har en femte fane, Eksamen, med den eksamensnære oppgaven fra Del C i øvingsheftet: rolle, tidsanslag, casen, henvisning til bok og regneark, vanlig felle. Studenten skriver svaret sitt i et tekstfelt (ordteller, lagres på PC-en, kan kopieres) og trykker «Vis løsningsforslag». Under 80 ord får studenten et spørsmål om å skrive først. Løsningsforslaget er heftets tekst uendret, med skillet mellom bestått og godt svar. I spillmodus gir første gjennomførte eksamensoppgave per kapittel (≥ 80 ord og løsningsforslag vist) 4 000 kr, og fem gir merket «Sensorklar». Innholdet ligger i feltet `eksamen` i kapittelfila og ble hentet ut av heftene 11. september 2026; endres et hefte, oppdater feltet (eller be Aion kjøre uttrekket på nytt).

## Verktøy, prøve på tvers og tema

Forsiden har en egen rad «Verktøy og prøver på tvers». Kalkulatorene som står der listes i `LOM.oppsett.verktoy` i `00_struktur.js` (id, ikon, navn, tekst, bokhenvisning). Samme kalkulator kan også knyttes til et kapittel med feltet `kalkulator` i kapittelfila.

«Prøve på tvers av kapitler» trekker flervalgsspørsmål fra alle kapitler som har innhold, valgfritt avgrenset til én av de tre delene, 10/20/30 spørsmål, med eller uten klokke (10/20/40 minutter). Resultatet vises per kapittel med lenke til kapitlet der studenten scoret under 70 %.

Lyst og mørkt oppsett byttes med knappen øverst til høyre. Valget lagres i nettleseren; første gang følger appen systeminnstillingen. Fargene for mørkt oppsett ligger samlet under `:root[data-theme="dark"]` i `app.css`.

## Generator, tolker og vedlegg

Ubegrenset øving (forsiden og nederst i hvert kapittels Øv-fane) lager nye spørsmål hver gang. Regnemaler finnes for ok02, ok04, ok05, ok07, ok08, ok10, ma07 og ol20 i `generator.js`; alle kapitler får i tillegg begrepsspørsmål fra begrepstabellen. Feil alternativer er typiske misforståelser (delt på feil tall, prosent av feil grunnlag). Prøve på tvers kan blande inn genererte spørsmål med et kryss.

Tolkeren i tilbuds- og nullpunktskalkulatoren leser fritekst som «14 timer, timepris 950, 6 downlights à 439, rundsum kjøring 500, rabatt 30 %» og fyller feltene. Den er regelbasert (ingen KI) og kjenner ordene timer, timepris, tillegg, lønnskostnad, indirekte, rabatt, påslag, rundsum, samt varelinjer på formen «antall vare à pris». Ordlisten står i `LOM.h.tolk`-kallene i `kalkulatorer.js`.

Tilbud kan lagres med navn (lokalt i nettleseren) og hentes igjen. Vedlegg (bilder og filer) lagres i nettleserens IndexedDB, knyttet til det lagrede tilbudet. Ingenting sendes noe sted; alt ligger på studentens PC.

## Kobling til Gbrain og Obsidian

`bygg.py` skriver også et Obsidian-speil i `Notater/`: én markdown-note per kapittel (læringsmål, teori, formler, begreper, flervalg med fasit, regneoppgaver, vurderingsoppgaver, lærernotat, kilde) og kartnoten `LOM Læringsapp MOC.md` med lenker til alle. Notatene er søkbare i Obsidian, lenker til pensum-mappa, og kan hentes av NotebookLM og MCP-verktøyene. De overskrives ved hver bygging — rediger alltid i `kilde/innhold/`, aldri i `Notater/`.

Notatene ligger også som kilder i Gemini Notebook-notatboka «LØM: Fundamentals of Financial Management and Accounting Operations» (lastet opp 11. september 2026 via gbrain-verktøyet `notebooklm_push_notes`, kildenavn `Klassemateriell__LOM_App__Notater__…`). Etter en ny bygging må de pushes på nytt for å være oppdatert; gamle versjoner bør slettes i notatboka først, ellers dobles de.

## Holde appen i takt med pensum (`sjekk.py`)

Pensum-mappa `LOM_Pensum_2026` er sannheten for faginnholdet; `kilde/innhold/` er sannheten for appen. `python sjekk.py` (pensum antas å ligge ved siden av, ellers `--pensum <sti>`) skriver `Notater/LOM-app Synk-rapport.md` med én rad per kapittel: hvilke pensumfiler (sammendrag, øvingshefte, regneark) som er endret etter at appkapitlet sist ble redigert, hvilke tall i appteksten som ikke finnes i noen av pensumfilene, om regnearket appen viser til finnes, og kjente feller (f.eks. «809 bedrifter i Norge»). Til slutt sjekkes tallgrunnlaget `00_tall.js` mot faktaarket i `00_Felles`: hvert tall skal finnes der, og rapporten sier fra om faktaarket er nyere enn tallgrunnlaget. Feil-alternativer i flervalg og lærernotatet telles ikke. Når du har lest et kapittel mot pensum og rettet det som skulle rettes: `python sjekk.py --godkjenn ok08` (eller `alle`), så forsvinner «nyere enn app»-varselet til neste gang pensum endres. Rapporten er en Obsidian-note med lenker til kapittelnotatene, så den kan leses rett i Gbrain.

Arbeidsflyt ved endring i pensum: endre dokumentet i `LOM_Pensum_2026` → `python sjekk.py` → rett i `kilde/innhold/<id>.js` → `python bygg.py` → `python sjekk.py --godkjenn <id>` → `python publiser.py`.

## Installer appen (PWA)

Nettutgaven er en installerbar nettapp. Knappen «Installer appen» øverst vises når appen åpnes fra nettadressen i en nettleser som ikke allerede kjører den som app. I Chrome og Edge på PC og på Android gir knappen et ekte installasjonsvindu; appen får eget ikon på skrivebordet, i startmenyen eller på startskjermen, åpnes uten adressefelt og virker uten nett (siste versjon ligger lagret). På iPhone og iPad, i Safari på Mac og i Firefox viser knappen en kort bruksanvisning (Del → «Legg til på Hjem-skjerm» osv.), fordi disse ikke støtter installasjonsvinduet. Knappen finnes ikke i den nedlastede fila (file://).

Teknikken: `kilde/pwa/manifest.webmanifest` (navn, ikoner, farger), `kilde/pwa/sw.js` (service worker: henter fra nettet først og lagrer kopi; uten nett brukes kopien; åpnede pensumfiler lagres også) og ikonene. `bygg.py` skriver alt til `publisering/` og setter versjonsstrengen fra `00_struktur.js` inn i `sw.js`, slik at hver ny versjon gir ny cache og gammel slettes. Når en ny versjon er lastet opp, får studenten meldingen «Ny versjon er lastet ned — åpne appen på nytt» ved neste åpning. Alle filene i `publisering/` (unntatt `pensum/` når den ikke er endret) må lastes opp sammen.

## Filer til kapitlet (PDF og Excel fra pensum-mappa)

Hvert kapittel viser i fanen Les boksen «Filer til kapitlet»: presentasjonen som PDF, sammendraget, øvingsheftet og regnearkene, med dato og størrelse. Fanen Eksamen viser heftet og regnearket. Forsiden viser fellesfilene (faktaark, ordliste, «Start her», «Slik bruker du oppgavene»). Lenkene er relative (`pensum/<kapittel>/<fil>`) og virker fra nettutgaven; i den nedlastede fila står det i stedet hvor mange filer som finnes, med lenke til nettutgaven (`nettadresse` i `00_struktur.js`).

`python pensum_publiser.py` (pensum antas å ligge ved siden av, ellers `--pensum <sti>`) velger per kapittel nyeste `*_NY.pdf` som presentasjon, `*sammendrag_Studenter*.pdf`, nyeste øvingshefte (fra `Oppgaver_og_ovelser` eller flatt) og alle `*.xlsx`, kopierer dem til `publisering/pensum/<kapittel>/`, fjerner filer som ikke lenger er gjeldende, og skriver `kilde/innhold/00_filer.js`. Aldri med: pptx (notatfeltet), docx, alt med `Laerer` i navnet, bilder. Arbeidsflyt: endre i pensum-mappa → `python pensum_publiser.py` → `python bygg.py` → last opp `index.html` og de endrede filene i `pensum/` til GitHub. Mappa `pensum/` er om lag 25 MB første gang; senere bare endrede filer.

## Publisere på GitHub Pages (ett klikk fra Teams)

Appen ligger ute på **https://truthseeker1968.github.io/lom-app/** (repository `Truthseeker1968/lom-app`, satt opp 11. september 2026, gren `main`, mappe `/ (root)`). Legg adressen inn som fane i Teams («+» → Nettsted). Ny versjon publiseres enten med `python publiser.py` (krever Git) eller manuelt: bygg med `python bygg.py` (skriver `publisering/index.html` og PWA-filene selv), åpne https://github.com/Truthseeker1968/lom-app/upload/main, dra inn `index.html`, `manifest.webmanifest`, `sw.js`, ikonene og mappa `pensum` (mapper kan dras inn direkte fra Utforsker) og klikk «Commit changes». Siden oppdateres etter ett–to minutter.

Oppsett fra bunnen av, om det trengs igjen: opprett en konto på github.com, lag et nytt **offentlig** repository med navn `lom-app` (uten README), installer Git fra git-scm.com, og kjør i mappa:

    python publiser.py --oppsett https://github.com/<brukernavn>/lom-app.git

Første push åpner et innloggingsvindu; logg inn med GitHub-kontoen. Gå så til repositoryet på github.com → Settings → Pages → Source «Deploy from a branch», Branch `main`, mappe `/ (root)` → Save. Etter ett–to minutter svarer `https://<brukernavn>.github.io/lom-app/`. Legg adressen inn som fane i Teams («+» → Nettsted).

Med GitHub Desktop (installert 14. september 2026): klon repositoryet én gang til `C:\Gbrain\Klassemateriell\LOM_App\publisering` (File → Clone repository → Truthseeker1968/lom-app, velg mappa). Etter ny bygging: kopier `LOM_Laeringsapp.html` til `publisering\index.html` (Aion gjør det ved «publiser»), åpne GitHub Desktop, skriv en kort commit-melding, «Commit to main» og «Push origin». Siden er oppdatert etter ett–to minutter.

Hver gang etterpå med Git i PATH: `python publiser.py`. Skriptet bygger, kopierer til `publisering/index.html`, committer og pusher. Adressen er den samme; studentene ser ny versjon ved neste åpning. Studentenes fremdrift ligger i deres egen nettleser og påvirkes ikke.

Merk: adressen er offentlig. Alle med lenken kan åpne appen, og lærer-PIN-en ligger i klartekst i fila. Legg derfor aldri eksamensoppgaver eller sensurveiledning i appen.

## Spillmodus «Bygg Nordlys»

Knappen 🎮 øverst til høyre slår spillmodus på og av; alt innhold er det samme, spillmodus legger et lag oppå. Studenten velger et kallenavn (bare synlig for seg selv) og konkurrerer mot seg selv: lest kapittel, brukte kalkulatorer, riktige og gale svar (innsats teller), regneoppgaver, prøver, prøve på tvers og dagens utfordring gir kroner til Nordlys Elektro. Kroner gir nivå (Lærling → Montør → Bas → Formann → Prosjektleder → Driftsleder → Installatør → Daglig leder), milepæler (verktøykasse, servicebil, ny montør … til overskudd på 1,3 mill) og tolv merker. Dagens utfordring er fem spørsmål trukket på tvers av pensum, samme for alle samme dag; streker teller dager på rad.

Alt ligger i `kilde/motor/spill.js`: satsene i `satser`, nivåene i `nivaaer`, milepælene i `milepaeler`, merkene i `merker`. Endre tall og tekster der, kjør `bygg.py`. Spilldata lagres lokalt under nøkkelen `lom_spill_v1`, uavhengig av fremdriften. Lagfeltet er forberedt for en senere klasse-/lagversjon, men brukes ikke ennå.

## Bruksstatistikk (anonym, daglig rapport)

Nettutgaven på GitHub Pages registrerer anonyme hendelser i Glenns eget Supabase-prosjekt (EU/Stockholm, tabellen `lom_hendelser`, kun innsetting tillatt for appens nøkkel): et tilfeldig øktnummer som lever til fanen lukkes, hvilke sider som åpnes (kapittel og fane, verktøy, prøve på tvers, spillsiden) og hendelsene `lest-<kap>`, `prove-<kap>-bestaatt`/`-ikke-bestaatt`, `prove-paa-tvers-…`, `kalkulator-<navn>`, `eksamen-<kap>`, `fil-<kap>-<type>` (åpnet pensumfil), `installert` (appen installert), `spillmodus-paa` og `aktiv-2-min`/`-10-min`/`-30-min`. Ingen navn, ingen fremdrift, ingen svar, ingen informasjonskapsler. Den nedlastede fila (file://) sender aldri noe. Oppsettet ligger i `00_struktur.js` under `telling` (url og anon-nøkkel; tom url slår av). Hver hverdag kl. 07:00 kjører den planlagte oppgaven «LØM-app: daglig bruksrapport» som leser tabellen og sender Glenn gårsdagens tall som melding; mandager med ukesum. Viewet `lom_dagsrapport` i databasen gir dagstallene direkte.

## Lærermodus

Klikk fem ganger raskt på logoen (LØM-merket øverst til venstre) øverst til venstre, skriv PIN (satt i `00_struktur.js`, standard `LOM2026`). Da vises fasit med begrunnelse under hvert spørsmål, en boks med «Kopier alle spørsmål med fasit» og «Kopier 10 genererte spørsmål» (til utklippstavlen, for prøver i Word eller Forms). Nullstilling av kapittel ligger i verktøylinjen øverst på hvert kapittel. Fem klikk til slår modusen av. Endre PIN før distribusjon — den ligger i klartekst i fila og er en terskel, ikke en lås.

## Innstillinger i `00_struktur.js`

`proveAntall` (antall spørsmål trukket tilfeldig i prøven), `bestaattProsent` (grense for bestått), `varsel` (sammendrag-varselet som vises på alle sider), `versjon` (vises i bunnen — oppdater ved hver ny utgave).
