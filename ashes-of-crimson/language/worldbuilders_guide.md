## The Djamon Language — Djamonkel

### A Grammar of Djamonkel

Draft Specification v1.01  

This document outlines the core phonology, morphology, and syntax of **Djamonkel**, a constructed language with a distinctly Germanic/Norse sound profile.

---

## 1. Phonology

The sound system is distinctively Germanic/Norse, characterized by hard consonants, distinctive clusters, and a clear vowel system.

### 1.1 Consonant Inventory
| Category          | Sounds                        | Notes                        |
|---|---|---|
| **Stops**         | `/p/, /b/, /t/, /d/, /k/, /g/` |                              |
| **Fricatives**    | `/f/, /v/, /s/, /z/, /θ/, /h/` | `/θ/` spelled **th**         |
| **Affricates**    | `/dʒ/`                        | spelled **dj** — "hard J"    |
| **Nasals**        | `/m/, /n/`                    |                              |
| **Liquids/Glides**| `/l/, /r/, /y/`               |                              |


**Note on `dj`**:  
The digraph **dj** represents a voiced affricate (as in *judge*). It is treated as a **single consonant onset**.

### 1.2 Vowels & Diphthongs

- **Vowels**: `a, e, i, o, u`
- **Diphthongs / Glides**:
  - **ay** (as in *eye*): treated structurally as vowel + consonant coda `/aj/`.

### 1.3 Syllable Structure

The basic syllable template is:

> **(C)(C)V(C)**

- **Onset**:  
  - Single consonant: `Ka`  
  - Cluster: `Sno`, `Bran`, `Flam`
- **Nucleus**:  
  - Mandatory vowel.
- **Coda**:  
  - Single consonant: `Ram`, `Kel`  
  - Or semivowel: `Ay`

### 1.4 Stress Rules

Stress falls primarily on the **first syllable of the root word**.

- **Simple words**:  
  - `Som-mar`  
  - `Vin-ta`
- **Compounds**:  
  Primary stress remains on the first root, with secondary stress on the second root.
  - `Zelram` → **ZEL**-ram  
  - `Flambran` → **FLAM**-bran
- **Particles**:  
  Tense particles (`ta`, `ka`, `zo`) are generally **unstressed clitics**.

---

## 2. Morphology

Words are primarily formed through **compounding** and **suffixation**.

### 2.1 Pluralization

The language distinguishes between **standard multiplicity** and an **“Epic/Mythic” totality**.

#### Plural Types

| Type              | Suffix     | Rule / Usage                                      | Examples                                      |
| ----------------- | ---------- | ------------------------------------------------- | --------------------------------------------- |
| Standard plural   | `-en`      | General plural marker                             | `Kin` → `Kinen` (“children”)                  |
|                   |            |                                                   | `Flam` → `Flamen` (“flames”)                  |
| Irregular plural  | `-an`      | Used for certain roots ending in nasals           | `Ram` → `Raman` (“lands”)                     |
| Epic plural       | `-era/-ara`| Indicates “all” or a totality of the concept      | `Jor` → `Jorera` (“all life”)                 |
|                   |            |                                                   | `Ram` → `Ramara` (“all lands”)                |

### 2.2 Derivational Suffixes

These suffixes transform nouns into **agents**, **locations**, or **descriptive concepts**.

| Suffix | Function     | Meaning                               | Example                                                    |
| ------ | ------------ | ------------------------------------- | ---------------------------------------------------------- |
| `-ar`  | Agentive     | “One who does” / “the doer”          | `Vorn` (guard) + `-ar` → `Vornar` (“watcher”)              |
| `-ram` | Locative     | Region / “land of”                   | `Zel` (river) + `-ram` → `Zelram` (“riverlands”)           |
| `-iya` | Feminine     | Flowing / graceful                   | `Sur` + `-iya` → `Suraiya`                                 |
| `-kel` | Abstract     | State of being / essence             | `Sno` (snow) + `-kel` → `Snoskel` (“winter-soul”)          |
| `-sk`  | Adjectival   | “Having the quality of”              | `Flam` + `-sk` → `Flamsk` (“fiery / burned”)               |
| `-th`  | Ritual       | Vowed or sworn version               | `Kin` + `-th` → `Kinth` (“sworn-child / ward”)             |

### 2.3 Compounding Rules

Compounding is the **primary method** of vocabulary expansion.

- **Rule 1: Direct Merge (Standard)**  
  Roots are joined directly.
  - `Flam` + `Bran` → `Flambran` (“blaze of flame”)

- **Rule 2: Consonant Harmonization**  
  When the first root ends with the same consonant the second begins with, they merge into a **single instance**.
  - `Ram` + `Mar` (“sea / water”) → `Ramar` (“water-land / coast”)

- **Rule 3: Semantic Hierarchy (Modifier–Head)**  
  The first root **modifies** the second root. The second root is the **core object**.
  - `Zel` (river — descriptor) + `Ram` (land — core) → `Zelram` (“river-land”)  
  - `Thar` (oath) + `Flam` (fire) → `Tharflam` (“ritual fire / oath fire”)

---

## 3. Syntax

Djamonkel utilizes a **strict word order** with **analytic tense marking**.

### 3.1 Word Order

Basic clause structure:

> **S – V – O** (Subject – Verb – Object)

Example:

- `Sommar ta run ram.`  
  - **Gloss**: `Sommar` (Sommar, Subj) `ta` (past) `run` (walked, Verb) `ram` (land, Obj)  
  - **Translation**: “Summer walked the land.”

### 3.2 Tense Particles

Verbs do **not** conjugate. Tense is indicated by a **particle placed immediately before the verb**.

| Particle | Tense / Aspect           | Example              | Translation                         |
| -------- | ------------------------ | -------------------- | ----------------------------------- |
| `ta`     | Past                     | `Sommar ta run.`     | “Sommar walked.”                    |
| `ka`     | Continuous / Present     | `Zel ka run.`        | “The river flows / is flowing.”     |
| `zo`     | Future / Intention       | `Sommar zo flam.`    | “Sommar will burn.”                 |

### 3.3 Noun Modification (Descriptors)

Adjectives and other descriptors **follow the noun** (post-nominal position).

Examples:

- `Ram skarkel` → “land harsh” → **“the harsh land”**
- `Kin flamvorn` → “child fiery-willed” → **“the fiery-willed child”**

### 3.4 Possession

Possession is marked by **juxtaposition** in the order:

> **Possessed + Possessor**

Examples:

- `Kel Sommar` → “heart [of] Sommar”
- `Zel Vinta` → “river [of] winter”

---

## 4. Lexicon Expansion

### 4.1 Glossary Additions (Suggested)

_Internal note (lexicon design): When no suitable Djamonkel root or compound can be formed from existing material, new **root words** may be coined directly from Germanic or Norse sources, then lightly adapted to Djamonkel phonology and stress patterns._


