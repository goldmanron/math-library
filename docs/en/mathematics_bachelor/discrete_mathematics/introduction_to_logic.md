Mathematical logic is a branch of mathematics that deals with the expression of simple and complex mathematical statements. It allows for the removal of the multiplicity of meanings that exists in human languages by establishing precise rules for presenting different statements in a way that can be understood in only one way. Logic also deals with systems of rules for drawing valid conclusions from data or assumptions in our possession.

!!! mexample "_Example_: Uncertainty in Language"

    When you are in a restaurant and ask for a Coke, the waitress asks, "Would you like regular *or* zero?" Of course, the word *or* in this case refers to the choice between one of the two and not both, on the other hand, when asked, "Are you hungry *or* thirsty?" You can mean either one of the two or perhaps both at the same time, meaning that the word *or* has a double meaning depending on the context.

Logic began its journey in ancient Greece as a branch of philosophy, but following many significant developments in its formal directions, it is now also considered a branch of mathematics. Logic serves as the central theoretical basis for computer science. It is necessary, for example, when we want to "talk" to a machine (such as a computer), because communication with a computer must be very precise and unambiguous, and must comply with predetermined logical rules. Developing logical thinking is also necessary for dealing with various and diverse problems, especially in the fields of science and technology, which require precise and orderly analysis of processes and ideas. In addition, the ability to justify arguments accurately while avoiding logical fallacies that would harm the validity of conclusions is a central tool in mathematics and computer science.

## Propositional Calculus

In everyday language, words like "if" or "or" are fuzzy. A legal contract might use "if" differently than a parent talking to a child. In mathematics and computer science, we cannot afford this fuzziness. Propositional Calculus strips away the meaning of the words to focus entirely on the **structure** of the truth. Think of it as the "algebra" of logic: just as $x + y$ works the same whether $x$ represents apples or dollars, $A \text{ and } B$ works the same whether $A$ is a weather report or a status bit in a CPU.

Imagine you are writing a computer program to launch a rocket. If your code says "launch if the weather is good or the override switch is pressed and fuel is full," the computer needs to know exactly how to group those conditions. Does it mean `(weather is good OR override switch is pressed) AND fuel is full`? Or does it mean `weather is good OR (override switch is pressed AND fuel is full)`? Formalization rescues us from disastrous ambiguity by forcing us to name our basic facts and build exact relationships between them.

This type of logic deals with sentences, a mathematical object that can be either true or false, and the relations between those sentences.

!!! def "_Definition_: Formalization"

    The transformation of a literal verse into a language of mathematical forms.

!!! mexample "_Example_"

    We'll formalize the sentence "Today is not Tuesday, today is Monday and tomorrow will be Tuesday", to do that we will define three sentences,

    $$\begin{aligned}
    a & =\text{"Today is Tuesday"} & b & =\text{"Today is Monday"} & c & =\text{"Tomorrow is Tuesday"}
    \end{aligned}$$

    Then our original sentence takes the following form, "(not $a$) and ($b$ and $c$)".

!!! def "_Definition_: Atomic Sentence"

    A self-contained sentence that can be either $\true$ or $\false$.

    ??? mnote "_Note_"

        An "atomic sentence" may also be called a "proposition".

!!! mexample "_Example_"

    "It is raining outside" Is an atomic sentence because it can be $\true$ or $\false$ and is not composed of sub-sentences that can be $\true$ or $\false$.

???+ exercise "_Exercise_: Identifying Atomic Sentences"

    Determine which of the following English sentences are atomic sentences. Remember, an atomic sentences must be a declarative sentence that is strictly true or false (but not both).

    1. Boston is the capital of Massachusetts.
    2. How are you doing today?
    3. $2 + 3 = 6$.
    4. $x + 5 = 10$.
    5. Read this book carefully!

    ??? solution

        1. **Yes, this is an atomic sentences.** It is a declarative statement and it is true.
        2. **No.** This is a question, not a declarative statement. It cannot be assigned a truth value.
        3. **Yes, this is an atomic sentences.** It is a declarative statement, even though it evaluates to $\false$. Falsity doesn't stop it from being an atomic sentences!
        4. **No.** This statement's truth depends entirely on the value of $x$. Without knowing $x$, we cannot say it is true or false. (In later chapters, you'll learn this is called a *predicate*, but it is not an atomic sentences on its own).
        5. **No.** This is an imperative command, not a statement of fact.

???+ exercise "_Exercise_: The Liar Paradox"

    Is the following self-referential statement an atomic sentence?
    
    _"This sentence is false."_

    ??? solution
        **No.** If the statement evaluates to $\true$, then by its own definition, it must be $\false$. If it evaluates to $\false$, then the statement is telling the truth, making it $\true$. Since it leads to a strict contradiction and cannot hold a definitive truth value, it is not an atomic sentence.

Understanding how to identify atomic sentences isn't just an abstract philosophical game; it is the foundation of how computer programs make decisions. When a compiler or an interpreter reads your code, it needs to evaluate conditions inside if statements or while loops. These conditions must resolve to definitively true or definitively false. If a statement is ambiguous, a computer simply cannot process it. By training yourself to spot atomic propositions, you are essentially training your brain to think like a machine processing data. Let's look at how this applies to everyday technology.

???+ exercise "_Exercise_: Identifying Atomic Sentences in Computer Systems"

    Determine which of the following system logs or code snippets represent atomic sentences:
    
    1. `Error 404: File not found.`
    2. `Restart the server immediately!`
    3. `User 'admin' logged in at 10:00 AM.`
    4. `CPU usage > 90%`
    5. `x = 5` (as an assignment instruction, not a comparison)

    ??? solution

        1. **Yes.** This is a declarative statement about the state of the system. It is true if the file is genuinely missing, and false otherwise.
        2. **No.** This is a command (imperative), not a proposition.
        3. **Yes.** This is a factual claim that can be verified as true or false by checking server logs.
        4. **No.** Just like $x + 5 = 10$, this depends on the current CPU usage. Without a specific point in time, we cannot say if it's true or false. (It is a predicate).
        5. **No.** This is an action/command instructing the computer to assign a value to memory, not a declaration of truth.

### Logical Connectives

Atomic sentences are the fundamental blocks of logic, but on their own, they are incredibly limited. In everyday speech and mathematical reasoning, we rarely use isolated claims. Instead, we link them together: "If it rains, _then_ I will stay home," or "The number $n$ is even _and_ $n$ is a prime."

To replicate this in mathematical logic, we introduce formal tools that act like linguistic glue. These are called **Logical Connectives**. They take one or more sentences as inputs and construct a brand-new, complex sentence whose truth depends entirely on the components.

!!! def "_Definition_: Negation Connective"

    Given a sentence $A$ we express "not $A$" symbolically as "$\neg A$".

    ??? mnote "_Note_"

        It is also common to use the notation "$\sim A$" or "$\overline{A}$" for negation, but we will use only "$\neg A$".

!!! def "_Definition_: Conjunction Connective"

    Given two sentences $A$ and $B$ we express "$A$ and $B$" symbolically as "$A \land B$".

!!! def "_Definition_: Disjunction Connective"

    Given two sentences $A$ and $B$ we express "$A$ or $B$" symbolically as "$A \lor B$".

!!! def "_Definition_: Implication Connective"

    Given two sentences $A$ and $B$ we express "if $A$ then $B$" symbolically as "$A \implies B$", and we call $A$ the "**Prefix**" and $B$ the "**Suffix**" of the sentence.

???+ exercise "_Exercise_: Translating Campus Rules"

    Let $p$, $q$, and $r$ be the propositions:

    - $p$: "You get an A on the final exam."
    - $q$: "You do every exercise in this book."
    - $r$: "You get an A in this class."

    Write the following propositions using $p, q, r$ and logical connectives:
    
    1. You get an A in this class, but you do not do every exercise in this book.
    2. To get an A in this class, it is necessary for you to get an A on the final exam.
    3. Getting an A on the final exam and doing every exercise in this book is sufficient for getting an A in this class.

    ??? solution

        1. The word "but" logically means "and". You are achieving $r$ AND you are NOT achieving $q$.
           **Answer**: $r \land \neg q$
        2. Saying something is "necessary" means you can't have the result without it. If you get an A in the class, then you must have gotten an A on the final.
           **Answer**: $r \implies p$
        3. Saying something is "sufficient" means it guarantees the result. If you do both $p$ and $q$, then $r$ will happen.
           **Answer**: $(p \land q) \implies r$

Translating English to formal logic is a crucial skill for software engineers, lawyers, and mathematicians. Human language is full of colloquialisms and hidden meanings. Words like "unless", "provided that", and "only if" can trip up even experienced university students. The motivation here is safety and precision: if you are coding the logic for an autopilot system or drafting a legal contract, misinterpreting an "unless" can be catastrophic. Formalizing these words removes the guesswork.

???+ exercise "Exercise: The Tricky "Unless""

    Let $P$ be "You have a ticket" and $Q$ be "You can board the train".
    Translate the following sentence into formal logic:
    "You cannot board the train unless you have a ticket."

    ??? solution

        The word "unless" can almost always be translated logically as "if not". So, the sentence becomes:
        "You cannot board the train **if you do not** have a ticket."
        This translates cleanly into an implication: If (you do not have a ticket), then (you cannot board the train).

        **Answer:** $\neg P \implies \neg Q$

???+ exercise "Exercise: Necessary and Sufficient Conditions"

    Let $R$ be "It rains" and $C$ be "The game is canceled".
    Translate the following English phrasing into logical implications:

    1. Rain is a sufficient condition for the game to be canceled.
    2. Rain is a necessary condition for the game to be canceled.
    3. The game is canceled only if it rains.

    ??? solution

        1. "Sufficient" means it guarantees the outcome. If it rains, the cancellation definitely happens. 
            
            **Answer:** $R \implies C$
        2. "Necessary" means the outcome cannot happen without it. If the game was canceled, it *must* have rained. 
            
            **Answer:** $C \implies R$
        3. "Only if" indicates a necessary condition. The cancellation forces us to conclude that it rained. 
            
            **Answer:** $C \implies R$

???+ exercise "_Exercise_: Translating Number Theory"

    Let $P$ be "$n$ is divisible by 4" and $Q$ be "$n$ is divisible by 2". Translate the following into propositional logic and determine if they are True or False over the integers.
    
    1. $n$ is divisible by 4 implies $n$ is divisible by 2.
    2. $n$ is divisible by 2 is a sufficient condition for $n$ to be divisible by 4.

    ??? solution
        1. **Translation:** $P \implies Q$.
            
            **Truth:** $\true$. Every multiple of 4 is a multiple of 2.
        2. **Translation:** $Q \implies P$.
            
            **Truth:** $\false$. For example, $n=6$ is divisible by 2, but it is not divisible by 4.

### Sentences

Now after defining the atomic sentences and the connectives we can define what a sentence is formally,

!!! def "_Definition_: Sentence"

    A claim that is composed by atomic sentences and connectives between them.

!!! mexample "_Example_"

    The phrase "Today is Tuesday" is a sentence, while "What is the time?", "Close the door!" and "1 + 1" are not.

!!! mexample "_Example_"

    Let $A$, $B$ and $C$ be atomic sentences, then the following phrases are also sentences,

    - $A \implies B$
    - $\left(A\lor B\right)\land\left(C\lor B\right)$
    - $\left(\left(A\lor B\right)\implies\neg A\right)\implies C$

!!! mnote "_Note_"

    Phrases of the form,

    - $A\implies$
    - $A\land\lor B$
    - $A\land B\implies C$
    - $A \neg$
    
    Which are phrases without mathematical meaning or with dual meaning are not considered as sentence in propositional calculus, and such phrases are called "**abuse of notation**".

???+ exercise "_Exercise_: The Island of Knights and Knaves"

    On a famous fictional island, every inhabitant is either a **Knight** (who always tells the truth) or a **Knave** (who always lies). You meet Alice and Bob. 
    Alice says: "At least one of us is a Knave."
    Formalize this scenario and determine what Alice and Bob are.

    ??? solution

        Let $A$ be the sentence "Alice is a Knight" and $B$ be the sentence "Bob is a Knight".
            1. Assume Alice is a Knight ($A$ is $\true$). Then $\neg A \lor \neg B$ is $\true$. Since $A$ is $\true$, $\neg A$ is $\false$, so $\neg B$ must be $\true$. This means Bob is a Knave. This is a consistent assignment.
            2. Assume Alice is a Knave ($A$ is $\false$). Then $A \land B$ must be $\true$ (the negation of her statement). But $A$ is $\false$, so $A \land B$ is $\false$. This is a contradiction.
        Conclusion: Alice is a Knight and Bob is a Knave.

#### Values of Sentences

Now that we have sentences in our mathematical language we want to give them meaning, for that we have to talk about truth and falseness of sentences.

!!! def "_Definition_: Truth Assignment"

    Let $A$ be an atomic sentence, then we assign to $A$ a value of either $\true$ or $\false$. Moreover we'll use the notation $V\left(A\right)$ for the truth assignment of $A$.

!!! mnote "_Note_"

    In our logic system a sentence is either $\true$ or $\false$ but never both.

    And mathematically, for all atomic sentences $A$ the following holds,

    $$\left(\left(V\left(A\right)=\true\right)\land\left(V\left(A\right)\ne\false\right)\right)\lor\left(\left(V\left(A\right)=\false\right)\land\left(V\left(A\right)\ne\true\right)\right)$$

From the last note we can infer the rule "reductio ad absurdum", which means in English "**proof by contradiction**", to prove that a statement $\varphi$ is true we can assume that it's false and show that it implies a contradiction, hence because we have only two options for the truthiness of $\varphi$ we can deduce that $\varphi$ must be true!

!!! mexample "_Example_"

    This are a few sentences and their truth assignments,

    - $V\left(1<3\right) = \true$
    - $V\left(1+ 1 = 3\right) = \false$

???+ exercise "_Exercise_"

    Formalize and determine if the following sentence is true, false or not a sentence, "Today is Tuesday and Tomorrow will also be Tuesday".

    ??? solution

        We will define two sentences,

        $$\begin{aligned}
        A & =\text{"Today is Tuesday"} & B & =\text{"Tomorrow is Tuesday"}
        \end{aligned}$$

        Then our original sentence is $A \land B$, but we also note that only of them can be true by our understanding of the week days, hence we can that

        $$V\left(A\land B\right) = \false$$

When analyzing the truth values of complex sentences, we often don't need to know the truth value of every single atomic sentence to find the final result. Sometimes, knowing just one piece of information is enough to collapse the whole expression. This is known as "short-circuit evaluation" in computer programming. For example, if you have a massive conjunction of requirements ($A \land B \land C \land \dots$), finding out that $A$ is false immediately tells you the whole sentence is false, saving the computer from having to check $B$ or $C$. This saves immense processing time and is a highly practical application of logic mechanics.

???+ exercise "Exercise: Short-Circuit Logic"

    Suppose you know for a fact that the atomic sentence $A$ is $\false$. Without knowing the truth values of $B$, $C$, or $D$, determine the truth value of the following complex sentences:
    1. $A \land (B \lor C \lor \neg D)$
    2. $A \implies (B \land \neg C)$
    3. $(B \land C) \implies A$

    ??? solution

        1. **False.** Since $A$ is $\false$, the conjunction of $A$ with absolutely anything else must evaluate to $\false$.
        2. **True.** An implication with a $\false$ prefix (hypothesis) is always true, thanks to the Principle of Explosion (also known as a vacuous truth).
        3. **Cannot be determined.** The implication $(B \land C) \implies A$ evaluates to $\false \implies \false$ (which is True) if $B \land C$ is false. However, it evaluates to $\true \implies \false$ (which is False) if $B \land C$ is true. Since the outcome changes, we need more information.

!!! claim "_Claim_"

    Let $A_1, \ldots, A_n$ be atomic sentences then there are overall $2^n$ possible assignments of all the atomic sentences to truth values.

    ??? proof

        Each atomic sentence $A_i$ can be assigned to either $\true$ or $\false$, therefore each $A_i$ has two options for it's assignment, and the atomic sentences don't have any connection between then (since they are atomic, and therefore the choice of their values is arbitrary). Hence overall there are

        $$\underbrace{2\cdot\ldots\cdot2}_{n}=2^{n}$$

        assignments of truth values to $A_1, \ldots, A_n$.

Knowing that a collection of $n$ atomic sentences yields exactly $2^n$ unique truth environments gives us immense power. Because this number is finite, we don't have to guess how a complex sentence will behave under different circumstances. We can map out every single possibility systematically.

This exhaustive mapping is called a **Truth Table**. By evaluating our logical connectives row by row for every possible combination of $\true$ and $\false$, we completely strip away ambiguity.

!!! def "_Definition_: Truth Table"

    A table that summarizes the truth value of a complex sentence given a change in the truth assignment of each of the atomic sentences that he's composed of.

Let's look at how our primary connectives are rigidly defined by these tables,

!!! def "_Definition_: Truth Tables for the Logical Connectives"

    Let $A$ and $B$ be atomic sentences then,

    ??? def "_Definition_: Truth Table for the Negation Connective"

        | $V\left(A\right)$      | $V\left(\neg A\right)$ |
        |----------|----------|
        | $\true$  | $\false$ |
        | $\false$ | $\true$  |
    
    ??? def "_Definition_: Truth Table for the  Conjunction Connective"

        | $V\left(A\right)$      | $V\left(B\right)$      | $V\left(A\land B\right)$ |
        |----------|----------|---------------|
        | $\true$  | $\true$  | $\true$       |
        | $\true$  | $\false$ | $\false$      |
        | $\false$ | $\true$  | $\false$      |
        | $\false$ | $\false$ | $\false$      |

    ??? def "_Definition_: Truth Table for the  Disjunction Connective"

        | $V\left(A\right)$      | $V\left(B\right)$      | $V\left(A\lor B\right)$ |
        |----------|----------|---------------|
        | $\true$  | $\true$  | $\true$       |
        | $\true$  | $\false$ | $\true$       |
        | $\false$ | $\true$  | $\true$       |
        | $\false$ | $\false$ | $\false$      |

    ??? def "_Definition_: Truth Table for the  Implication Connective"

        | $V\left(A\right)$      | $V\left(B\right)$      | $V\left(A\implies B\right)$ |
        |----------|----------|---------------|
        | $\true$  | $\true$  | $\true$       |
        | $\true$  | $\false$ | $\false$      |
        | $\false$ | $\true$  | $\true$       |
        | $\false$ | $\false$ | $\true$       |

Wait but how did the two last entries in the implication table got assigned to true? Well we can think it through with a simpler example,

!!! mexample "_Example_: Falseness Implies All"

    Imagine a parent tells their child "If it rains, then I will take you to the movies.", then four options may occur,

    - It rains and they go to the movies: Promise kept (True).
    - It rains and they don't go: Promise broken (False).
    - It does not rain and they go anyway: The parent didn't break their promise. The promise only applied "if it rains." (True).
    - It does not rain and they don't go: Again, the parent didn't break their promise. (True).

This is actually a bigger phenomena in logic that we can note and formalize!

!!! mnote "_Note_: Principle of Explosion"

    Let $A$ and $B$ be atomic sentences then,

    $$\left(V\left(A\right) = \false\right) \implies \left(V\left(A \implies B\right) = \true\right)$$

Now given the truth assignment of the connectives between atomic sentences we can finally talk about the truth assignment of all sentences, this is done by noticing that all sentences by definition are compose from atomic sentences and connectives between them.

!!! mexample "_Example_"

    Given that $A$, $B$ and $C$ are atomic sentences, we want to create a truth table for the following sentence,

    $$\left(\left(A\land B\right)\implies C\right)\implies\left(\left(\neg A\right)\lor C\right)$$

    | $A$ | $B$ | $C$ | $A\land B$ | $\left(A\land B\right)\implies C$ | $\neg A$ | $\left(\neg A\right)\lor C$ | $\left(\left(A\land B\right)\implies C\right)\implies\left(\left(\neg A\right)\lor C\right)$
    |--|--|--|--|--|--|--|--|
    | $\true$ | $\true$ | $\true$ | $\true$ | $\true$ | $\false$ | $\true$ | $\true$ |
    | $\true$ | $\false$ | $\true$ | $\false$ | $\true$ | $\false$ | $\true$ | $\true$ |
    | $\true$ | $\true$ | $\false$ | $\true$ | $\false$ | $\false$ | $\false$ | $\true$ |
    | $\true$ | $\false$ | $\false$ | $\false$ | $\true$ | $\false$ | $\false$ | $\false$ |
    | $\false$ | $\true$ | $\true$ | $\false$ | $\true$ | $\true$ | $\true$ | $\true$ |
    | $\false$ | $\false$ | $\true$ | $\false$ | $\true$ | $\true$ | $\true$ | $\true$ |
    | $\false$ | $\true$ | $\false$ | $\false$ | $\true$ | $\true$ | $\true$ | $\true$ |
    | $\false$ | $\false$ | $\false$ | $\false$ | $\true$ | $\true$ | $\true$ | $\true$ |

    \* If the math in the table shows tiny please right click on it and zoom.

???+ exercise "_Exercise_: Deducing From Truth Tables"

    Try to deduce the truth assignment from the following given data,

    1. Given that $A \lor \left(\neg B\right)$ is a false sentence, what can we deduce?
          1. $A$ is true, $B$ is true.
          2. $A$ is true, $B$ is false.
          3. $A$ can't be determined, $B$ is true.
          4. $A$ is false, $B$ is true.
          5. $A$ is false, $B$ can't be determined.
    2. Given that $A$ and $B$ are both false, what can we infer about $\left(A\implies B\right) \land \left(B\implies A\right)$?
          1. It's a true sentence.
          2. It's a false sentence.
          3. It can't be determined.

    ??? solution

        1. The solution is answer "**d**", by the truth table of the disjunction connective we know that for the result to be false both the sentenced being or-ed must be false themselves, hence $A$ is false, and $\neg B$ is false, then by the truth table of the negation connective we know that for $\neg B$ to be false it must follow that $B$ is true.
        2. The solution is answer "**a**". First of all we need to look at $A \implies B$ and $B \implies A$ separately to infer about the whole complex sentence, since we know that $A$ is false we know by the truth table of the implication connective that $A \implies B$ is true, likewise because $B$ is false we know by the truth table of the implication connective that $B \implies A$ is true. Now, we can see that by the truth table of the conjunction connective that $\left(A\implies B\right) \land \left(B\implies A\right)$ must be true.

Truth tables are essentially the brute-force search algorithm of logic. While they are 100% reliable, they grow exponentially. A formula with 3 variables requires 8 rows, 4 variables require 16, and 10 variables require a massive 1,024 rows! Despite their size, they are invaluable for verifying logical equivalence and analyzing circuit designs.

???+ exercise "Exercise: Three-Variable Truth Table"

    Construct a truth table for the formula: $(P \lor Q) \implies (\neg P \land R)$.
    In how many distinct scenarios (rows) does this formula evaluate to True?

    ??? solution

        Let's systematically build the table for $P, Q, R$:
        
        | $P$ | $Q$ | $R$ | $P \lor Q$ | $\neg P$ | $\neg P \land R$ | $(P \lor Q) \implies (\neg P \land R)$ |
        |-----|-----|-----|------------|----------|------------------|----------------------------------------|
        | $\true$ | $\true$ | $\true$ | $\true$ | $\false$ | $\false$ | $\false$ |
        | $\true$ | $\true$ | $\false$ | $\true$ | $\false$ | $\false$ | $\false$ |
        | $\true$ | $\false$ | $\true$ | $\true$ | $\false$ | $\false$ | $\false$ |
        | $\true$ | $\false$ | $\false$ | $\true$ | $\false$ | $\false$ | $\false$ |
        | $\false$ | $\true$ | $\true$ | $\true$ | $\true$ | $\true$ | $\true$ |
        | $\false$ | $\true$ | $\false$ | $\true$ | $\true$ | $\false$ | $\false$ |
        | $\false$ | $\false$ | $\true$ | $\false$ | $\true$ | $\true$ | $\true$ |
        | $\false$ | $\false$ | $\false$ | $\false$ | $\true$ | $\false$ | $\true$ |

        **Answer:** Looking at the final column, the formula evaluates to True in exactly **3 scenarios**.

???+ exercise "_Exercise_: Building Truth Tables"

    Construct a truth table for the formula: $(P \implies Q) \lor \neg P$.
    What is unique about the final column of this truth table?

    ??? solution
    
        Let's construct the table for $P$ and $Q$. We need columns for $\neg P$, $P \implies Q$, and the final expression $(P \implies Q) \lor \neg P$.
        
        | $P$ | $Q$ | $\neg P$ | $P \implies Q$ | $(P \implies Q) \lor \neg P$ |
        |-----|-----|----------|----------------|------------------------------|
        | $\true$ | $\true$ | $\false$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\false$ | $\false$ | $\false$ |
        | $\false$ | $\true$ | $\true$ | $\true$ | $\true$ |
        | $\false$ | $\false$ | $\true$ | $\true$ | $\true$ |

        **Analysis:** The final column is $\true$ except when $P$ is $\true$ and $Q$ is $\false$. This is exactly the same truth column as the implication $P \implies Q$ alone! We've just proven that $(P \implies Q) \lor \neg P$ is logically equivalent to $P \implies Q$.

???+ exercise "Exercise: Reverse Engineering a Formula"

    Find a logical formula using only variables $A, B$, and the standard connectives ($\land, \lor, \neg$) that is True **only** when $A$ is true and $B$ is false, and False in all other three cases.

    ??? solution

        We want a formula that evaluates to True strictly in the row where $A = \true$ and $B = \false$.
        This corresponds directly to asserting that $A$ is true AND simultaneously $B$ is not true.
        
        **Answer:** $A \land \neg B$

### Complex Logical Connectives

We have defined previously the base logical connectives, those are the logical connectives that are the most primitive in our logic, then we have given them meaning by truth tables. But who said that those are the only logical connectives we are allowed to use? In fact we can define a lot of other logical connectives that might be useful.

The **if and only if** (abbreviated **iff**) is one of the most useful logical connectives, informally it means that the implication done is bidirectional.

!!! def "_Definition_: If and Only If Connective"

    Let $A$ and $B$ be sentences such that,

    $$\left(A\implies B\right)\land\left(B\implies A\right)$$

    Then we use the notation $A\iff B$ and say that "$A$ if and only if $B$", or abbreviated to "$A$ iff $B$".

    ??? def "_Definition_: Truth Table for the If and Only If Connective"

        | $V\left(A\right)$      | $V\left(B\right)$      | $V\left(A\iff B\right)$ |
        |----------|----------|---------------|
        | $\true$  | $\true$  | $\true$       |
        | $\true$  | $\false$ | $\false$      |
        | $\false$ | $\true$  | $\false$      |
        | $\false$ | $\false$ | $\true$       |

Likewise, the **exclusive disjunction** connective (abbreviated **xor**), can be very useful, and it's the opposite of the iff connective logically.

!!! def "_Definition_: Exclusive Disjunction Connective"

    Let $A$ and $B$ be sentences such that,

    $$\left(A\land \left(\neg B\right)\right)\lor \left(\left(\neg A\right)\lor B\right)$$

    Then we use the notation $A\oplus B$ and say that "$A$ exclusive or $B$", or abbreviated to "$A$ xor $B$".

    ??? def "_Definition_: Truth Table for the Exclusive Disjunction Connective"

        | $V\left(A\right)$      | $V\left(B\right)$      | $V\left(A\oplus B\right)$ |
        |----------|----------|----------------|
        | $\true$  | $\true$  | $\false$       |
        | $\true$  | $\false$ | $\true$        |
        | $\false$ | $\true$  | $\true$        |
        | $\false$ | $\false$ | $\false$       |

???+ exercise "_Exercise_: The Sheffer Stroke (NAND)"

    In computer engineering, almost all chips are built using a single type of gate called **NAND** (Not-AND), symbolized as $A \uparrow B$. It is true unless both $A$ and $B$ are true.
    
    1. Write the truth table for $A \uparrow B$.
    2. Show that $\neg A$ is equivalent to $A \uparrow A$.

    ??? solution

        1. Truth Table for NAND,

            | $A$ | $B$ | $A \uparrow B$ |
            |-----|-----|----------------|
            | $\true$ | $\true$ | $\false$ |
            | $\true$ | $\false$ | $\true$ |
            | $\false$ | $\true$ | $\true$ |
            | $\false$ | $\false$ | $\true$ |

        2. If $A$ is $\true$, then $A \uparrow A$ is $\true \uparrow \true = \false$. If $A$ is $\false$, then $A \uparrow A$ is $\false \uparrow \false = \true$. In both cases, the result is exactly $\neg A$.

You might wonder why we invent new complex connectives like XOR or NAND if we can already express everything with AND, OR, and NOT. The answer is hardware efficiency and cryptography. The XOR operation is the mathematical backbone of almost all modern encryption algorithms. It allows us to perfectly mask a message with a cryptographic key.

Meanwhile, the NAND gate is the "universal gate" of hardware. In manufacturing computer processors, it is dramatically cheaper and easier to mass-produce billions of identical NAND gates and wire them up to simulate AND, OR, and NOT, rather than building three separate types of physical electronic gates.

???+ exercise "Exercise: XOR as a Parity Checker"

    Calculate the truth table for $(A \oplus B) \oplus C$.
    What simple property of the inputs $A, B, C$ causes the final result to evaluate to $\true$?

    ??? solution

        | $A$ | $B$ | $C$ | $A \oplus B$ | $(A \oplus B) \oplus C$ |
        |-----|-----|-----|--------------|-------------------------|
        | $\true$ | $\true$ | $\true$ | $\false$ | $\true$ |
        | $\true$ | $\true$ | $\false$ | $\false$ | $\false$ |
        | $\true$ | $\false$ | $\true$ | $\true$ | $\false$ |
        | $\true$ | $\false$ | $\false$ | $\true$ | $\true$ |
        | $\false$ | $\true$ | $\true$ | $\true$ | $\false$ |
        | $\false$ | $\true$ | $\false$ | $\true$ | $\true$ |
        | $\false$ | $\false$ | $\true$ | $\false$ | $\true$ |
        | $\false$ | $\false$ | $\false$ | $\false$ | $\false$ |

        **Analysis:** The final result is $\true$ exactly when an **odd number** (1 or 3) of the inputs are $\true$. This mathematically reliable trait is why XOR is heavily used to calculate "parity" bits for error checking in RAM memory chips!

### Equivalence of Sentences

After talking about sentences and their truth value, we want to be able to distinguish different logic sentences, for example we know that "Today is Monday and tomorrow is Tuesday" is equivalent to saying "Tomorrow is Tuesday and today is Monday", but we want to give this a formal definition,

!!! def "_Definition_: Sentence Equivalence"

    Let $A$ and $B$ be sentences such that, for every truth assignment of the atomic sentences the following holds,

    $$V\left(A\right) = V\left(B\right)$$

    then we call $A$ and $B$ equivalent sentences, and use the notation $A \equiv B$.

!!! mnote "_Note_"

    Given two sentences $\varphi$ and $\psi$, if the truth table of $\varphi$ and $\psi$ is the same then we know that they are equivalent, this is because by definition the truth table shows us the result of the truth assignment for $\varphi$ and $\psi$ under every truth assignment to the atomic sentence that makes them.

Now that we know how to prove equivalence of sentences we want to show some commonly used results that will be very important for your entire math journey.

#### Commutativity

We want to show that conjunction and disjunction are commutative, this is a neat trick to use when needed!

!!! claim "_Claim_: Conjunction is Commutative"

    Let $A$ and $B$ be sentences then,

    $$A\land B\equiv B\land A$$

    ??? proof

        We will show that the columns in the truth table match,

        | $A$ | $B$ | $A \land B$ | $B \land A$ |
        |-----|-----|-------------|-------------|
        | $\true$ | $\true$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\false$ | $\false$ |
        | $\false$ | $\true$ | $\false$ | $\false$ |
        | $\false$ | $\false$ | $\false$ | $\false$ |

???+ exercise "_Exercise_: Disjunction is Commutative"

    Let $A$ and $B$ be sentences, show that the following holds,

    $$A\lor B\equiv B\lor A$$

    ??? solution

        We will show that the columns in the truth table match,

        | $A$ | $B$ | $A \lor B$ | $B \lor A$ |
        |-----|-----|-------------|-------------|
        | $\true$ | $\true$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\true$ | $\true$ |
        | $\false$ | $\true$ | $\true$ | $\true$ |
        | $\false$ | $\false$ | $\false$ | $\false$ |

Likewise, some of the complex logical connectives are also commutative.

!!! claim "_Claim_: Exclusive Disjunction is Commutative"

    Let $A$ and $B$ be sentences then,

    $$A\oplus B\equiv B\oplus A$$

    ??? proof

        We will show that the columns in the truth table match,

        | $A$ | $B$ | $A \oplus B$ | $B \oplus A$ |
        |-----|-----|-------------|-------------|
        | $\true$ | $\true$ | $\false$ | $\false$ |
        | $\true$ | $\false$ | $\true$ | $\true$ |
        | $\false$ | $\true$ | $\true$ | $\true$ |
        | $\false$ | $\false$ | $\false$ | $\false$ |

#### Associativity

We want to show that conjunction and disjunction are associative, this is very useful for reducing complex sentences by shuffling the parentheses around them.

!!! claim "_Claim_: Conjunction is Associative"

    Let $A$, $B$ and $C$ be sentences then,

    $$A\land\left(B\land C\right)\equiv\left(A\land B\right)\land C$$

    ??? proof

        We will show that the columns in the truth table match,

        | $A$ | $B$ | $C$ | $A\land\left(B\land C\right)$ | $\left(A\land B\right)\land C$ |
        |-----|-----|-----|-------------------------------|--------------------------------|
        | $\true$ | $\true$ | $\true$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\true$ | $\false$ | $\false$ |
        | $\true$ | $\true$ | $\false$ | $\false$ | $\false$ |
        | $\true$ | $\false$ | $\false$ | $\false$ | $\false$ |
        | $\false$ | $\true$ | $\true$ | $\false$ | $\false$ |
        | $\false$ | $\false$ | $\true$ | $\false$ | $\false$ |
        | $\false$ | $\true$ | $\false$ | $\false$ | $\false$ |
        | $\false$ | $\false$ | $\false$ | $\false$ | $\false$ |

???+ exercise "_Exercise_: Disjunction is Associative"

    Let $A$ and $B$ be sentences, show that the following holds,

    $$A\lor\left(B\lor C\right)\equiv\left(A\lor B\right)\lor C$$

    ??? solution

        We will show that the columns in the truth table match,

        | $A$ | $B$ | $C$ | $A\lor\left(B\lor C\right)$ | $\left(A\lor B\right)\lor C$ |
        |-----|-----|-----|-------------------------------|--------------------------------|
        | $\true$ | $\true$ | $\true$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\true$ | $\true$ | $\true$ |
        | $\true$ | $\true$ | $\false$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\false$ | $\true$ | $\true$ |
        | $\false$ | $\true$ | $\true$ | $\true$ | $\true$ |
        | $\false$ | $\false$ | $\true$ | $\true$ | $\true$ |
        | $\false$ | $\true$ | $\false$ | $\true$ | $\true$ |
        | $\false$ | $\false$ | $\false$ | $\false$ | $\false$ |

Likewise, some of the complex logical connectives are also associative.

!!! claim "_Claim_: Exclusive Disjunction is Associative"

    Let $A$ and $B$ be sentences then,

    $$A\oplus\left(B\oplus C\right)\equiv\left(A\oplus B\right)\oplus C$$

    ??? solution

        We will show that the columns in the truth table match,

        | $A$ | $B$ | $C$ | $A\oplus\left(B\oplus C\right)$ | $\left(A\oplus B\right)\oplus C$ |
        |-----|-----|-----|-------------------------------|--------------------------------|
        | $\true$ | $\true$ | $\true$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\true$ | $\false$ | $\false$ |
        | $\true$ | $\true$ | $\false$ | $\false$ | $\false$ |
        | $\true$ | $\false$ | $\false$ | $\true$ | $\true$ |
        | $\false$ | $\true$ | $\true$ | $\false$ | $\false$ |
        | $\false$ | $\false$ | $\true$ | $\true$ | $\true$ |
        | $\false$ | $\true$ | $\false$ | $\true$ | $\true$ |
        | $\false$ | $\false$ | $\false$ | $\false$ | $\false$ |

#### Idempotency

We want to show that conjunction and disjunction are idempotence, meaning that if they are applied twice it can be reduced to one logical connective.

!!! claim "_Claim_: Conjunction is Idempotent"

    Let $A$ be a sentence then,

    $$A\land A\equiv A$$

    ??? proof

        We will show that the columns in the truth table match,

        | $A$ | $A \land A$ |
        |-----|-------------|
        | $\true$ | $\true$ |
        | $\false$ | $\false$ |

        Since the columns for $A$ and $A \land A$ are identical, $A \land A \equiv A$.

???+ exercise "_Exercise_: Disjunction is Idempotent"

    Let $A$ be a sentence, show that the following holds,

    $$A\lor A\equiv A$$

    ??? solution

        We will show that the columns in the truth table match,

        | $A$ | $A \lor A$ |
        |-----|------------|
        | $\true$ | $\true$ |
        | $\false$ | $\false$ |

        Since the columns for $A$ and $A \lor A$ are identical, $A \lor A \equiv A$.

#### Distributivity

We want to show that conjunction and disjunction are distributive over one another, this is also very useful for reducing complex sentences by being able to pull out conjunctions and disjunctions.

!!! claim "_Claim_: Conjunction is Distributive Over Disjunction"

    Let $A$, $B$ and $C$ be sentences then,

    $$A\land\left(B\lor C\right)\equiv\left(A\land B\right)\lor\left(A\land C\right)$$

    ??? proof

        We will show that the columns in the truth table match,

        | $A$ | $B$ | $C$ | $A\land\left(B\lor C\right)$ | $\left(A\land B\right)\lor\left(A\land C\right)$ |
        |-----|-----|-----|------------------------------|--------------------------------------------------|
        | $\true$ | $\true$ | $\true$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\true$ | $\true$ | $\true$ |
        | $\true$ | $\true$ | $\false$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\false$ | $\false$ | $\false$ |
        | $\false$ | $\true$ | $\true$ | $\false$ | $\false$ |
        | $\false$ | $\false$ | $\true$ | $\false$ | $\false$ |
        | $\false$ | $\true$ | $\false$ | $\false$ | $\false$ |
        | $\false$ | $\false$ | $\false$ | $\false$ | $\false$ |

???+ exercise "_Exercise_: Disjunction is Distributive Over Conjunction"

    Let $A$ and $B$ be sentences, show that the following holds,

    $$A\lor\left(B\land C\right)\equiv\left(A\lor B\right)\land\left(A\lor C\right)$$

    ??? solution

        We will show that the columns in the truth table match,

        | $A$ | $B$ | $C$ | $A\lor\left(B\land C\right)$ | $\left(A\lor B\right)\land\left(A\lor C\right)$ |
        |-----|-----|-----|------------------------------|-------------------------------------------------|
        | $\true$ | $\true$ | $\true$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\true$ | $\true$ | $\true$ |
        | $\true$ | $\true$ | $\false$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\false$ | $\true$ | $\true$ |
        | $\false$ | $\true$ | $\true$ | $\true$ | $\true$ |
        | $\false$ | $\false$ | $\true$ | $\false$ | $\false$ |
        | $\false$ | $\true$ | $\false$ | $\false$ | $\false$ |
        | $\false$ | $\false$ | $\false$ | $\false$ | $\false$ |

#### Negation Equivalences

Now we still want to show some useful equivalences to use.

!!! claim "_Claim_: Negation is an Involution"

    Let $A$ be a sentence then,

    $$\neg\left(\neg A\right)\equiv A$$

    ??? proof

        We will show that the columns in the truth table match,

        | $A$ | $\neg A$ | $\neg \left(\neg A\right)$ |
        |-----|----------|----------------------------|
        | $\true$ | $\false$ | $\true$ |
        | $\false$ | $\true$ | $\false$ |

In mathematics, proving "If P then Q" is sometimes very hard. But proving its **Contrapositive**, "If NOT Q then NOT P", is often much easier!

!!! claim "_Claim_: Contraposition"

    Let $A$ and $B$ be sentences then,

    $$A\implies B\equiv\left(\neg B\right)\implies\left(\neg A\right)$$

    ??? proof

        We will show that the columns in the truth table match,

        | $A$ | $B$ | $A\implies B$ | $\left(\neg B\right)\implies\left(\neg A\right)$ |
        |-----|-----|---------------|--------------------------------------------------|
        | $\true$ | $\true$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\false$ | $\false$ |
        | $\false$ | $\true$ | $\true$ | $\true$ |
        | $\false$ | $\false$ | $\true$ | $\true$ |

!!! mexample "_Example_: The Contrapositive in Action"

    Original: "If an integer $n^2$ is even ($P$), then $n$ is even ($Q$)."

    Contrapositive: "If $n$ is odd ($\neg Q$), then $n^2$ is odd ($\neg P$)."

    It is much easier to prove the contrapositive algebraically! Truth tables guarantee that this bypass is perfectly valid.

???+ exercise "_Exercise_"

    Let $A$ and $B$ be sentences, show that each of the following holds,

    1. $A\implies B\equiv\left(\neg A\right)\lor B$.
    2. $\neg\left(A\implies B\right)\equiv A\land\left(\neg B\right)$.

    ??? proof

        We will show that the columns in the truth table match,

        1.

        | $A$ | $B$ | $A\implies B$ | $\left(\neg A\right)\lor B$ |
        |-----|-----|---------------|-----------------------------|
        | $\true$ | $\true$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\false$ | $\false$ |
        | $\false$ | $\true$ | $\true$ | $\true$ |
        | $\false$ | $\false$ | $\true$ | $\true$ |
        
        2.

        | $A$ | $B$ | $\neg\left(A\implies B\right)$ | $A\land\left(\neg B\right)$ |
        |-----|-----|--------------------------------|-----------------------------|
        | $\true$ | $\true$ | $\false$ | $\false$ |
        | $\true$ | $\false$ | $\true$ | $\true$ |
        | $\false$ | $\true$ | $\false$ | $\false$ |
        | $\false$ | $\false$ | $\false$ | $\false$ |

???+ exercise "_Exercise_: The Converse and Inverse Fallacies"

    A common mistake among first-year university math students is assuming that if $P \implies Q$ is true, then $Q \implies P$ (the Converse) must also be true.

    Construct a truth table to show that $P \implies Q$ is **NOT** logically equivalent to its converse $Q \implies P$, nor its inverse $\neg P \implies \neg Q$.

    ??? solution

        | $P$ | $Q$ | $\neg P$ | $\neg Q$ | $P \implies Q$ | $Q \implies P$ | $\left(\neg P\right) \implies \left(\neg Q\right)$ |
        |-----|-----|----------|----------|----------------|----------------|--------------------------|
        | $\true$ | $\true$ | $\false$ | $\false$ | $\true$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\false$ | $\true$ | $\false$ | $\true$ | $\true$ |
        | $\false$ | $\true$ | $\true$ | $\false$ | $\true$ | $\false$ | $\false$ |
        | $\false$ | $\false$ | $\true$ | $\true$ | $\true$ | $\true$ | $\true$ |
        
        Notice rows 2 and 3: The truth values differ. Therefore, they are not logically equivalent!

Intuitively, how do we negate a compound statement? Imagine someone tells you: _"The suspect is tall and wearing a jacket."_ If you find out this statement is false, what does that mean? It doesn't mean the suspect is short _and_ not wearing a jacket. It simply means at least one of those attributes failed: either they are not tall, _or_ they are not wearing a jacket.

This brings us to **De Morgan's Laws**, which show us that when you distribute a negation $(\neg)$ over a conjunction $(\land)$, it transforms into a disjunction $(\lor)$, and vice versa.

!!! claim "_Claim_: De Morgan's laws"

    <div id="claim-de-morgans-laws"></div>
    Let $A$ and $B$ be sentences then,

    1. $\neg\left(A\land B\right)\equiv\left(\neg A\right)\lor\left(\neg B\right)$.
    2. $\neg\left(A\lor B\right)\equiv\left(\neg A\right)\land\left(\neg B\right)$.

    ??? proof

        We will show that the columns in the truth table match,

        1.

        | $A$ | $B$ | $\neg\left(A\land B\right)$ | $\left(\neg A\right)\lor\left(\neg B\right)$ |
        |-----|-----|-----------------------------|----------------------------------------------|
        | $\true$ | $\true$ | $\false$ | $\false$ |
        | $\true$ | $\false$ | $\true$ | $\true$ |
        | $\false$ | $\true$ | $\true$ | $\true$ |
        | $\false$ | $\false$ | $\true$ | $\true$ |

        2.

        | $A$ | $B$ | $\neg\left(A\lor B\right)$ | $\left(\neg A\right)\land\left(\neg B\right)$ |
        |-----|-----|----------------------------|-----------------------------------------------|
        | $\true$ | $\true$ | $\false$ | $\false$ |
        | $\true$ | $\false$ | $\false$ | $\false$ |
        | $\false$ | $\true$ | $\false$ | $\false$ |
        | $\false$ | $\false$ | $\true$ | $\true$ |

???+ exercise "Exercise: Expressing Disjunction with NAND"

    Using only the NAND connective ($\uparrow$), construct a formula that is logically equivalent to $A \lor B$. 

    *Hint: You already proved that $\neg X \equiv X \uparrow X$. Think about De Morgan's Laws!*

    ??? solution

        By De Morgan's Law, we know that an OR statement can be rewritten as a negated AND statement,
        
        $$A \lor B \equiv \neg(\neg A \land \neg B)$$
        
        Notice that the NAND operator itself is literally a negated AND: $X \uparrow Y \equiv \neg(X \land Y)$.
        So, $\neg(\neg A \land \neg B)$ is exactly the NAND of $\neg A$ and $\neg B$,
        
        $$(\neg A) \uparrow (\neg B)$$

        Since we are tasked with using *only* the NAND symbol, we replace the remaining negations using the rule $\neg X \equiv X \uparrow X$, we get out final answer,
        
        $$(A \uparrow A) \uparrow (B \uparrow B)$$

#### Tautologies and Contradictions

!!! def "_Definition_: Tautology"

    Let $A$ be a sentence such that, for every truth assignment of the atomic sentences the following holds,

    $$V\left(A\right) = \true$$

    then we call $A$ a tautology.

!!! mexample "_Example_"

    Let $A$, $B$ and $C$ be sentences, then the following is a tautology,

    $$\left(\left(A\implies\left(B\implies C\right)\right)\land B\right)\implies\left(A\implies C\right)$$

    ??? proof

        - If we assume that

            $$V\left(\left(A\implies\left(B\implies C\right)\right)\land B\right) = \false$$

            then

            $$V\left(\left(\left(A\implies\left(B\implies C\right)\right)\land B\right)\implies\left(A\implies C\right)\right) = \true$$

            as we wanted.
        - Else we assume that

            $$V\left(\left(A\implies\left(B\implies C\right)\right)\land B\right) = \true$$

            then from the truth table of conjunction we get that,

            $$\left(V\left(A\implies\left(B\implies C\right)\right) = \true\right) \land \left(V\left(B\right) = \true\right)$$

            now let's split to cases based on the truth assignment of $A$,

            * If we assume that $V\left(A\right) = \false$, then $V\left(A\implies C\right)=\true$, and hence

                $$V\left(\left(\left(A\implies\left(B\implies C\right)\right)\land B\right)\implies\left(A\implies C\right)\right) = \true$$

                as we wanted.
            * Else we assume that $V\left(A\right) = \true$, then $V\left(B\implies C\right) = \true$, and hence because we assume that $V\left(B\right)=\true$ we can infer that $V\left(C\right)=\true$, from that we get that $V\left(A\implies C\right)=\true$, and all in all we get that,

                $$V\left(\left(\left(A\implies\left(B\implies C\right)\right)\land B\right)\implies\left(A\implies C\right)\right) = \true$$

                as we wanted.

Modus Ponens is a deduction rule in mathematics, meaning a rule that can help us deduct certain information from a statement, and in fact it is the most famous one, "If $P$ implies $Q$, and you know $P$ is true, then you can deduce $Q$ is true."

???+ exercise "Exercise: Modus Ponens"

    Use a truth table to determine if the following sentence is a tautology:
    
    $$((A \implies B) \land A) \implies B$$

    ??? solution

        | $A$ | $B$ | $A \implies B$ | $(A \implies B) \land A$ | $((A \implies B) \land A) \implies B$ |
        |-----|-----|----------------|--------------------------|---------------------------------------|
        | $\true$ | $\true$ | $\true$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\false$ | $\false$ | $\true$ |
        | $\false$ | $\true$ | $\true$ | $\false$ | $\true$ |
        | $\false$ | $\false$ | $\true$ | $\false$ | $\true$ |
        
        **Answer:** Yes, the final column is entirely True under all circumstances. Therefore, it is a tautology.

!!! def "_Definition_: Contradiction"

    Let $A$ be a sentence such that, for every truth assignment of the atomic sentences the following holds,

    $$V\left(A\right) = \false$$

    then we call $A$ a contradiction.

???+ exercise "_Exercise_: Tautologies and Contradictions are Opposites"

    Let $A$ be a sentence then,

    $$\left(A \text{ is a tautology}\right)\iff \left(\neg A \text{ is a contradiction}\right)$$

!!! claim "_Claim_"

    Let $A$ be a sentence, then the following are tautologies

    1. $A \implies A$
    2. $A \lor \left(\neg A\right)$

    ??? proof
    
        We need to create the truth table for those sentences and show that they're always true.

        1.

        | $A$ | $A \implies A$ |
        |-----|----------------|
        | $\true$ | $\true$ |
        | $\false$ | $\true$ |

        2.

        | $A$ | $A \lor \left(\neg A\right)$ |
        |-----|------------------------------|
        | $\true$ | $\true$ |
        | $\false$ | $\true$ |

Modus Tollens is the twin of Modus Ponens: "If $P$ implies $Q$, and $Q$ is false, then $P$ must be false.".

???+ exercise "_Exercise_: Modus Tollens"

    Let $p$ be the proposition "It is snowing."
    Let $q$ be the proposition "I will study discrete math."
    
    Consider the following argument,

    **Premise 1:** "If it is snowing, then I will study discrete math." ($p \implies q$)

    **Premise 2:** "I will not study discrete math." ($\neg q$)
    
    **Conclusion:** "Therefore, it is not snowing." ($\neg p$)
    
    Prove that this argument form is a valid tautology by showing that $((p \implies q) \land \neg q) \implies \neg p$ is always true.

    ??? solution

        We construct a truth table to evaluate the entire compound statement:

        | $p$ | $q$ | $p \implies q$ | $\neg q$ | $(p \implies q) \land \neg q$ | $\neg p$ | $((p \implies q) \land \neg q) \implies \neg p$ |
        |-----|-----|----------------|----------|-------------------------------|----------|-------------------------------------------------|
        | $\true$ | $\true$ | $\true$ | $\false$ | $\false$ | $\false$ | $\true$ |
        | $\true$ | $\false$ | $\false$ | $\true$ | $\false$ | $\false$ | $\true$ |
        | $\false$ | $\true$ | $\true$ | $\false$ | $\false$ | $\true$ | $\true$ |
        | $\false$ | $\false$ | $\true$ | $\true$ | $\true$ | $\true$ | $\true$ |

        Because the final column evaluates to $\true$ in every single possible scenario, the argument is a **tautology** and the reasoning is perfectly valid!

In classical mathematics, every proposition must be either true or false; there is no "third" or "middle" option, and now that we understand how truth values work, we want to show that this is the case **always**.

???+ exercise "_Exercise_: The Law of Excluded Middle"

    Prove this foundational axiom by showing that $A \lor \neg A$ is a tautology.

    ??? solution

        | $A$ | $\neg A$ | $A \lor \neg A$ |
        |-----|----------|-----------------|
        | $\true$ | $\false$ | $\true$ |
        | $\false$ | $\true$ | $\true$ |
        
        The result is entirely true, proving the principle.

???+ exercise "_Exercise_: Peirce's Law"

    Show that the formula $\left(\left(P \implies Q\right) \implies P\right) \implies P$ is a tautology. 

    ??? solution

        | $P$ | $Q$ | $P \implies Q$ | $(P \implies Q) \implies P$ | $((P \implies Q) \implies P) \implies P$ |
        |-----|-----|----------------|-----------------------------|------------------------------------------|
        | $\true$ | $\true$ | $\true$ | $\true$ | $\true$ |
        | $\true$ | $\false$ | $\false$ | $\true$ | $\true$ |
        | $\false$ | $\true$ | $\true$ | $\false$ | $\true$ |
        | $\false$ | $\false$ | $\true$ | $\false$ | $\true$ |
    
    ??? mnote "_Note_"

        This is famously true in classical logic, but interestingly, it is unprovable in "intuitionistic" logic, a niche branch of math that rejects the Law of Excluded Middle!

#### Semantic Entailment

!!! def "_Definition_: Semantically Entailment Sentence"

    Let $A_1,\ldots , A_n$ be sentences and let $B$ be a sentence, such that the following holds,

    $$\left(\text{For all $i$ in range $1$ to $n$ we have } V\left(A_i\right) = \true\right) \implies V\left(B\right) = \true$$

    then we call $B$ a semantically entailment sentence in $A_1,\ldots , A_n$.

!!! mexample "_Example_"

    Let $\varphi$ and $\phi$ be sentences, and define the following,

    $$\begin{aligned}
    A_{1}&=\neg\left(\varphi\implies\psi\right)&A_{2}&=\psi&B&=\varphi
    \end{aligned}$$

    then $B$ is a semantically entailment sentence in $A_1, A_2$.

    ??? proof

        Assume by contradiction that
        
        $$\begin{aligned}
        V\left(A_{1}\right)&=\true&V\left(A_{2}\right)&=\true
        \end{aligned}$$

        in particular we get that,

        $$V\left(\neg\left(\varphi\implies\psi\right)\right)=\true$$

        and hence,

        $$V\left(\varphi\implies\psi\right)=\false$$

        but as we assumed it is also true that $V\left(\psi\right)=\true$, meaning it's impossible that $V\left(\varphi\right)=\true$ because if that was true then we would have gotten that,
        
        $$V\left(\varphi\implies\psi\right)=\true$$

        Hence we get that $V\left(\varphi\right)=\false$ and particularly $V\left(\neg\varphi\right)=\true$, meaning that $V\left(B\right)=\true$, which is exactly the definition that, $B$ is a semantically entailment sentence in $A_1, A_2$, as we wanted.

???+ exercise "_Exercise_"

    Let $A$, $B$ and $C$ be sentences, determine wether the sentence $B\implies C$ is a semantically entailment sentence in both $A\implies B$ and $A\implies C$.

## Predicate Calculus

In Propositional Calculus, a sentence like $A$ has a fixed, unyielding truth value. But mathematics needs to express properties of numbers and objects dynamically. Consider the statement, $\text{"}x \text{ is an even number"}$. Is this true or false? We cannot say until someone tells us what $x$ is. If $x=4$, it is true; if $x=7$, it is false. This "open sentence" is a **Predicate**.

!!! def "_Definition_: Predicate"

    A predicate in $n$ variables is a proposition in $n$ terms.

### Quantifiers

To turn a predicate back into a concrete sentence that can be definitively evaluated as $\true$ or $\false$, we have two choices:

1. Plug in a specific element for $x$.
2. State _how many_ elements in our universe satisfy the property using **Quantifiers**.

!!! def "_Definition_: Exists Quantifier"

    Indicates that there exists an object that satisfies the predicate, and we notate that with $\exists$.

!!! mexample "_Example_"

    The claim $\exists x. x\ge 2$ means that "There exists $x$ such that, x is greater equal to $2$", note that it does not say whether the claim is true or false, only its meaning.

!!! def "_Definition_: Forall Quantifier"

    Indicates that all objects satisfy the predicate, and we notate that with $\forall$.

!!! mexample "_Example_"

    The claim $\forall x. x\ge 2$ means that "For all $x$, x is greater equal to $2$", note that it does not say whether the claim is true or false, only its meaning.

!!! mexample "_Example_"

    The claim $\forall y.\exists x.x+x=y$ means that "For all $y$, there exists $x$ such that, $x + x = y$", note that it does not say whether the claim is true or false, only its meaning.

!!! def "_Definition_: Formula"

    A formula $\varphi$ is an expression of the form $\exists x.P\left(x\right)$ or $\exists x.Q\left(x\right)$ where $P$ and $Q$ are predicates in one variable or formulas themselves.

!!! mexample "_Example_"

    The following are formulas,

    1. $\forall x. x\ge 2$
    2. $\forall y.\exists x.x+x=y$
    3. $\exists x.\forall y.x<y$
    4. $\forall x.\forall y.\left(x<y\right)\implies\left(x<y\right)$

!!! mnote "_Note_"

    We saw that we can use the quantifiers $\forall$ and $\exists$ to form complex formulas, but sometimes the amount of quantifiers in a statement is huge, for that we use the following notation to reduce the amount of text written,

    Instead of writing $\forall x. \forall y. P\left(x, y\right)$ we can write $\forall x,y. P\left(x, y\right)$.

    Likewise instead of writing $\exists x. \exists y. P\left(x, y\right)$ we can write $\exists x,y. P\left(x, y\right)$.

???+ exercise "_Exercise_: Translating English to Predicates"

    Let $S(x)$ be "$x$ is a student", $C(y)$ be "$y$ is a course", and $L(x, y)$ be "$x$ loves $y$". Translate:
    
    1. Every student loves at least one course.
    2. There is a course that all students love.
    3. No student loves all courses.

    ??? solution

        1. $\forall x. (S(x) \implies \exists y. (C(y) \land L(x,y)))$
        2. $\exists y. (C(y) \land \forall x. (S(x) \implies L(x,y)))$
        3. $\neg \exists x. (S(x) \land \forall y. (C(y) \implies L(x,y)))$
            
            Alternatively: $\forall x. (S(x) \implies \exists y. (C(y) \land \neg L(x,y)))$

#### Existence and Uniqueness

After talking about the base quantifiers we can define ourselves more complex quantifiers,

!!! def "_Definition_: Exists Unique Quantifier"

    Indicates that there exists only one object that satisfies the predicate, and we notate that with $\exists!$.

    Formally we can define this quantifier from the base quantifiers as follows,

    $$\exists!x.\phi\left(x\right) = \left(\exists x.\phi\left(x\right)\right)\land\left(\forall x,y.\phi\left(x\right)\land\phi\left(y\right)\implies x=y\right)$$

!!! mexample "_Example_"

    We claim that "There exists a unique $x$ such that, for all $y$, $x + y = y$, we can write it formally as,

    $$\exists! x. \forall y. x + y = y$$

!!! def "_Definition_: Iota Notation"

    This notation is used to "select" the only object that satisfies an existence formula.
    
    Formally, given a predicate $\varphi$ such that $\exists ! x.\varphi\left(x\right)$ is a true formula, then we denote by

    $$\iota x.\varphi\left(x\right)$$

    the unique object for which the following is a true formula,

    $$\varphi\left(\iota x.\varphi\left(x\right)\right)$$

!!! mexample "_Example_"

    - In the formula

        $$\exists! x. \forall y. x + y = y$$

        over the natural numbers we know that $0$ is the unique $x$ for which the formula is true, hence we can write,
        
        $$0=\iota x.\left(\forall y.x+y=y\right)$$

    - Likewise, this is a true formula over the natural numbers,
        
        $$\left(\iota x.\left(x+1=7\right)\right)=6$$

    - And this is also a true formula over the natural numbers,
        
        $$\left(\iota x.x^{3}=27\right)=10$$

    - But this is not a valid object over the whole numbers,
        
        $$\iota x.x^{2}=9$$

        This is because we know that $3^2 = 9$ but also $\left(-3\right)^2 = 9$.

### Domain of Discourse

The proposition "There exists $x$ such that $x^2 = -1$" is a predicate in one variable, but on which domain does this defined? Does it even have meaning for all mathematical object? Likewise the proposition "For all $x, y$ holds that $x > y$" is a predicate in two variables, but again we don't know that is the domain of $x, y$, are they numbers? Maybe they're some arbitrary objects? For that we will define the **domain of discourse**.

We will define the domain of discourse to be the domain from which the variables come. But also, when it is clear what the domain is, we will not specify it (as in the formula $\exists x.x=1$ where it is clear that we are working over some number system that was disclosed beforehand).

!!! def "_Definition_: Domain of Discourse"

    A set of objects that constitute the source for "plugin in" of variables.

    ??? mnote "_Note_"

        This is also may be called "Universe of Discourse" in some sources.

!!! def "_Definition_: Interpretation of a Predicate"

    Let $D$ be the domain of discourse, then a claim on the elements of $D$.

!!! def "_Definition_: Soundness in Predicate Calculus"

    Let $D$ be a domain of discourse,

    - Let $A$ be a predicate or a formula, and let it's interpretation be $\exists x.P\left(x\right)$ over $D$, then we say that $A$ is a true statement over the domain $D$ if there exists an object $a$ in $D$ such that $P\left(a\right)$ is true.
    - Let $B$ be a predicate or a formula, and let it's interpretation be $\forall x.Q\left(x\right)$ over $D$, then we say that $B$ is a true statement over the domain $D$ if for all objects $a$ in $D$ the statement $P\left(a\right)$ is true.

    In those cases we use the notation, $D\models\exists x.P\left(x\right)$ and $D\models\forall x.Q\left(x\right)$.

!!! mexample "_Example_"

    Let $P$ be a predicate, and let it's interpretation be $\exists x. x = 1$ over the natural numbers, then we see that this is a sound (true) statement over the natural numbers, hence we can write,

    $$\text{"Natural Numbers"} \models A$$

!!! def "_Definition_: Formula Equivalence"

    Let $A$ and $B$ be formulas such that, for every domain of disclosure $D$, and for every interpretation $\alpha$ and $\beta$ of $A$ and $B$ over $D$ respectively, the following holds,

    $$D\models\left(A\iff B\right)$$

    then we call $A$ and $B$ equivalent formulas, and use the notation $A \equiv B$.

???+ exercise "_Exercise_"

    Show that the next formula isn't necessarily true (meaning find a domain of discourse and an interpretation for which this formula is false),

    $$\left(\left(\forall x.\exists y.P\left(x,y\right)\right)\land\left(\forall y.\exists x.P\left(x,y\right)\right)\right)\implies\exists x.\exists y.\forall z.\left(P\left(x,z\right)\lor P\left(z,y\right)\right)$$

    ??? solution

        We define our domain of discourse $D$ to be all the strings over the characters "0" and "1" (not including the empty string), and we define the interpretation of $P\left(x,y\right)$ over $D$ to be $x \text{ is a prefix of } y$.

        Now we want to show that the following isn't true,

        $$\left(\left(\forall x.\exists y.\left(x\text{ is a prefix of }y\right)\right)\land\left(\forall y.\exists x.\left(x\text{ is a prefix of }y\right)\right)\right)\implies\exists x.\exists y.\forall z.\left(\left(x\text{ is a prefix of }z\right)\lor\left(z\text{ is a prefix of }y\right)\right)$$

        for that we need to show that the prefix of the formula is true yet the suffix isn't.

        Proving that the prefix of the formula is true,

        * Let $x$ be an element in $D$, then we define $y = x$, and we see that $x\text{ is a prefix of }y$, hence we know that,
            
            $$\forall x.\exists y.\left(x\text{ is a prefix of }y\right)$$
        
        * Let $y$ be an element in $D$, then we define $x = y$, and we see that $x\text{ is a prefix of }y$, hence we know that,

            $$\forall y.\exists x.\left(x\text{ is a prefix of }y\right)$$
        
        All in all we get that,

        $$\left(\left(\forall x.\exists y.\left(x\text{ is a prefix of }y\right)\right)\land\left(\forall y.\exists x.\left(x\text{ is a prefix of }y\right)\right)\right)$$

        is a true formula.

        Now to show that,

        $$\exists x.\exists y.\forall z.\left(\left(x\text{ is a prefix of }z\right)\lor\left(z\text{ is a prefix of }y\right)\right)$$

        isn't a true formula, let's assume that it is true, then there are some $x$ and $y$ in the domain $D$ for which,

        $$\forall z.\left(\left(x\text{ is a prefix of }z\right)\lor\left(z\text{ is a prefix of }y\right)\right)$$

        is a true statement, but then we can define $z=\left(1-x\left[0\right]\right)y$ where multiplying means concatenation, then we get the following,
        
        * $x$ isn't a prefix for $z$, this is since

            $$z\left[0\right]=1-x\left[0\right]\ne x\left[0\right]$$
        
        * $z$ isn't a prefix for $y$, this is trivially true since the length of $z$ is one more than the one of $y$.

        meaning our assumption was wrong.
        
        Finally we get that the suffix of the original formula is false while the prefix is true, meaning that the original formula is false over $D$ as we wanted.

## Proofs

In propositional calculus we explained how sentences correlate one to each other through logical connectives. Likewise in predicate calculus we saw how formulas about objects are defined. And now, given all that, we want to be able to prove or disprove a formula.

!!! mnote "_Note_: Proof of Exists Formula"

    Let $D$ be a domain of discourse, let $P\left(x\right)$ be a predicate, and let $A\left(x\right)$ be an interpretation for $P\left(x\right)$ over $D$, then to prove the formula $\exists x.P\left(x\right)$ over $D$, one would need to provide an element $a$ in $D$ such that $A\left(a\right)$ is true.

!!! mnote "_Note_: Proof of Forall Formula"

    Let $D$ be a domain of discourse, let $P\left(x\right)$ be a predicate, and let $A\left(x\right)$ be an interpretation for $P\left(x\right)$ over $D$, then to prove the formula $\forall x.P\left(x\right)$ over $D$, one would need to show that for an arbitrary element $a$ in $D$ it follows that $A\left(a\right)$ is true.

This sections contains a lot of formal proofs for mathematical facts, try firstly to prove them yourself for exercise.

!!! claim "_Claim_: Forall and Exists are Inverses"

    <div id="claim-forall-and-exists-are-inverses"></div>
    Let $\varphi$ be a formula, then,

    1. $\neg\left(\exists x.\varphi\left(x\right)\right)\equiv\forall x.\neg\varphi\left(x\right)$
    2. $\neg\left(\forall x.\varphi\left(x\right)\right)\equiv\exists x.\neg\varphi\left(x\right)$

    ??? proof

        Let $D$ be a domain of discourse,

        1. We have to prove that,

            $$
            D \models \left(\left(\neg\left(\exists x.\varphi\left(x\right)\right)\right) \iff \left(\forall x.\neg\varphi\left(x\right)\right)\right)
            $$

            Let $P\left(x\right)$ be an interpretation of $\varphi\left(x\right)$ over $D$, now to show that the formula is true we want to prove that,

            $$
            \left(\neg\left(\exists x.P\left(x\right)\right)\right) \iff \left(\forall x.\neg P\left(x\right)\right)
            $$

            notice that this isn't the same thing since now we work with the interpretation over $D$ explicitly.

            Now we have to prove an iff implication, for that by definition we have to show two directional implications,

            - $\underline{\implies}$: We assume that the prefix is true (since if it's false the statement is true by definition of the implication connective), meaning that we know that,

                $$
                \neg\left(\exists x.P\left(x\right)\right)
                $$

                Now let's assume by contradiction that the suffix isn't correct, meaning that, not for all $a$ in $D$ the statement $\neg P\left(a\right)$ is true, this means that there is some element $a$ in $D$ for which $P\left(a\right)$ must be true, but this is a contradiction on our assumption that there isn't such object.
            
            - $\underline{\impliedby}$: We assume that the prefix is true, meaning that we know that,

                $$
                \forall x.\neg P\left(x\right)
                $$

                Now let's assume by contradiction that the suffix isn't correct, meaning that, there exists an $a$ in $D$ such that $P\left(a\right)$ is true, but this means that $\neg P\left(a\right)$ is false, contradicting our assumption.

        2. We have to prove that,

            $$
            D \models \left(\left(\neg\left(\forall x.\varphi\left(x\right)\right)\right)\equiv\left(\exists x.\neg\varphi\left(x\right)\right)\right)
            $$

            Let $P\left(x\right)$ be an interpretation of $\varphi\left(x\right)$ over $D$, now to show that the formula is true we want to prove that,

            $$
            \left(\neg\left(\forall x.P\left(x\right)\right)\right)\equiv\left(\exists x.\neg P\left(x\right)\right)
            $$

            notice that this isn't the same thing since now we work with the interpretation over $D$ explicitly.

            Now we have to prove an iff implication, for that by definition we have to show two directional implications,

            - $\underline{\implies}$: We assume that the prefix is true, meaning that we know that,

                $$
                \neg\left(\forall x.P\left(x\right)\right)
                $$

                Now let's assume by contradiction that the suffix isn't correct, meaning that, there isn't an element $x$ in $D$ such that $\neg P\left(x\right)$ is true, hence if we pick an arbitrary element $a$ in $D$ it must satisfy $P\left(a\right)$, but since this $a$ is arbitrary it must mean that it's true for all the elements in $D$ because $a$ can be any element from $D$, that means that, for all $x$ in $D$ we know that $P\left(x\right)$ must be true, but this is a contradiction to the assumption.
            
            - $\underline{\impliedby}$: We assume that the prefix is true, meaning that we know that,

                $$
                \exists x.\neg P\left(x\right)
                $$

                Now let's assume by contradiction that the suffix isn't correct, meaning that, for all $x$ in $D$ we have that $P \left(x\right)$, but from our assumption there is an element $a$ in $D$ such that $\neg P\left(a\right)$ is true, meaning that \neg P\left(a\right)$ is false and $P\left(a\right)$ is true, which is a contradiction.

!!! claim "_Claim_: Forall Quantifiers are Interchangeable"

    <div id="claim-forall-quantifiers-are-interchangeable"></div>
    Let $\varphi$ be a formula, then,

    $$\forall x.\forall y.\varphi\left(x,y\right)\equiv\forall y.\forall x.\varphi\left(x,y\right)$$

    ??? proof

        Let $D$ be a domain of discourse, and let $P(x,y)$ be an interpretation of $\varphi(x,y)$ over $D$.
        
        We must show that the statement $\forall x.\forall y.P(x,y)$ evaluates to $\true$ if and only if $\forall y.\forall x.P(x,y)$ evaluates to $\true$.

        - $\underline{\implies}$: We assume that the prefix is true, meaning that we know,
            
            $$\forall x.\forall y.P(x,y)$$
            
            By the semantic definition of the universal quantifier $\forall x$, this means that for every single element $a \in D$, the remaining formula $\forall y.P(a,y)$ must evaluate to $\true$.

            In turn, if $\forall y.P(a,y)$ is $\true$ for a given $a$, then by the semantic definition of $\forall y$, the statement $P(a,b)$ evaluates to $\true$ for every single element $b \in D$. 

            Since this holds across the selections, let us fix an arbitrary element $b_0 \in D$. We observe that for every element $a \in D$, the condition $P(a,b_0)$ holds. This implies that the statement $\forall x.P(x,b_0)$ is $\true$. 

            Since $b_0$ was an arbitrarily selected member of $D$, it must follow that for every element $y \in D$, the statement $\forall x.P(x,y)$ is $\true$. Thus, by definition, $\forall y.\forall x.P(x,y)$ is $\true$.

        - $\underline{\impliedby}$: We assume that the prefix is true, meaning that we know,
            
            $$\forall y.\forall x.P(x,y)$$
            
            By the semantic definition of $\forall y$, this means that for every single element $b \in D$, the statement $\forall x.P(x,b)$ evaluates to $\true$. 
            
            If $\forall x.P(x,b)$ is $\true$ for a given $b$, then by the definition of $\forall x$, the statement $P(a,b)$ evaluates to $\true$ for every single element $a \in D$.
            
            Now, let us fix an arbitrary element $a_0 \in D$. We look across all possible elements of $D$ and notice that for every element $b \in D$, the condition $P(a_0,b)$ holds. This means that the statement $\forall y.P(a_0,y)$ is $\true$. 
            
            Since $a_0$ was chosen arbitrarily from $D$, it must hold for all elements in the domain, meaning that for every element $x \in D$, the statement $\forall y.P(x,y)$ is $\true$. Thus, by definition, $\forall x.\forall y.P(x,y)$ is $\true$.

???+ exercise "_Exercise_: Exists Quantifiers are Interchangeable"

    Let $\varphi$ be a formula, then,

    $$\exists x.\exists y.\varphi\left(x,y\right)\equiv\exists y.\exists x.\varphi\left(x,y\right)$$

    ??? solution

        By the <a href="#claim-forall-and-exists-are-inverses">forall and exists are inverses claim</a>, we know that $\exists z.\psi(z) \equiv \neg\forall z.\neg\psi(z)$. Applying this to our formula,

        $$\begin{align*}
        \exists x.\exists y.\varphi\left(x,y\right) & \equiv \neg\forall x.\neg\left(\exists y.\varphi\left(x,y\right)\right) \\
        & \equiv \neg\forall x.\left(\forall y.\neg\varphi\left(x,y\right)\right) \\
        & \equiv \neg\left(\forall x.\forall y.\neg\varphi\left(x,y\right)\right)
        \end{align*}$$

        Now, we apply the <a href="#claim-forall-quantifiers-are-interchangeable">forall quantifiers are interchangeable claim</a> to swap the order of the universal quantifiers,

        $$\neg\left(\forall x.\forall y.\neg\varphi\left(x,y\right)\right) \equiv \neg\left(\forall y.\forall x.\neg\varphi\left(x,y\right)\right)$$

        Finally, we use the forall and exists are inverses claim again to convert the universal quantifiers back into existential ones,

        $$\begin{align*}
        \neg\left(\forall y.\forall x.\neg\varphi\left(x,y\right)\right) & \equiv \neg\forall y.\left(\forall x.\neg\varphi\left(x,y\right)\right) \\
        & \equiv \exists y.\neg\left(\forall x.\neg\varphi\left(x,y\right)\right) \\
        & \equiv \exists y.\exists x.\varphi\left(x,y\right)
        \end{align*}$$

        Thus, we have shown that $\exists x.\exists y.\varphi\left(x,y\right) \equiv \exists y.\exists x.\varphi\left(x,y\right)$.

!!! claim "_Claim_: Forall Quantifier is Distributive Over Conjunction"

    Let $\varphi$ and $\psi$ be formulas, then,

    $$\forall x.\left(\varphi\left(x\right)\land\psi\left(x\right)\right)\equiv\left(\forall x.\varphi\left(x\right)\right)\land\left(\forall y.\psi\left(y\right)\right)$$

    ??? proof

        Let $D$ be a domain of discourse, and let $P(x)$ and $Q(x)$ be interpretations of $\varphi(x)$ and $\psi(x)$ over $D$ respectively.

        - $\underline{\implies}$: Assume that $\forall x.\left(P(x) \land Q(x)\right)$ is true. Let $a \in D$ be an arbitrary element. By our assumption, $P(a) \land Q(a)$ is true, which implies that both $P(a)$ and $Q(a)$ are true. Since $a$ was arbitrary, we can conclude that $\forall x.P(x)$ is true and $\forall y.Q(y)$ is true. Thus, their conjunction $\left(\forall x.P(x)\right) \land \left(\forall y.Q(y)\right)$ is true.
        - $\underline{\impliedby}$: Assume that $\left(\forall x.P(x)\right) \land \left(\forall y.Q(y)\right)$ is true. This means that both $\forall x.P(x)$ and $\forall y.Q(y)$ are true. Let $a \in D$ be an arbitrary element. From the first part of our assumption, $P(a)$ is true. From the second part, $Q(a)$ is true. Thus, $P(a) \land Q(a)$ is true. Since $a$ was arbitrary, we conclude that $\forall x.\left(P(x) \land Q(x)\right)$ is true.

        Having shown both directions, we conclude that the formulas are equivalent.

???+ exercise "_Exercise_: Exists Quantifier is Distributive Over Disjunction"

    Let $\varphi$ and $\psi$ be formulas, then,

    $$\exists x.\left(\varphi\left(x\right)\lor\psi\left(x\right)\right)\equiv\left(\exists x.\varphi\left(x\right)\right)\lor\left(\exists y.\psi\left(y\right)\right)$$

    ??? solution

        We can prove this result by applying the <a href="#claim-forall-and-exists-are-inverses">forall and exists are inverses claim</a> and the previously proven <a href="#claim-forall-quantifier-is-distributive-over-conjunction">distribution of forall over conjunction</a>.

        $$\begin{align*}
        \exists x.\left(\varphi\left(x\right)\lor\psi\left(x\right)\right) & \equiv \neg\forall x.\neg\left(\varphi\left(x\right)\lor\psi\left(x\right)\right) \\
        & \equiv \neg\forall x.\left(\neg\varphi\left(x\right)\land\neg\psi\left(x\right)\right) && \text{(De Morgan's Laws)} \\
        & \equiv \neg\left(\left(\forall x.\neg\varphi\left(x\right)\right)\land\left(\forall y.\neg\psi\left(y\right)\right)\right) && \text{(Distribution of } \forall \text{ over } \land\text{)} \\
        & \equiv \neg\left(\forall x.\neg\varphi\left(x\right)\right)\lor\neg\left(\forall y.\neg\psi\left(y\right)\right) && \text{(De Morgan's Laws)} \\
        & \equiv \left(\exists x.\varphi\left(x\right)\right)\lor\left(\exists y.\psi\left(y\right)\right) && \text{(Inverse relation)}
        \end{align*}$$

!!! claim "_Claim_: Exists and Forall Quantifiers are Not Interchangeable"

    There exists a formula $\varphi$ for which,

    $$\exists x.\forall y.\varphi\left(x,y\right)\not\equiv\forall y.\exists x.\varphi\left(x,y\right)$$

    ??? proof

        To prove that the formulas are not equivalent, we provide a counter-example using a specific domain of discourse and interpretation.

        Let the domain of discourse $D$ be the natural numbers, and let $\varphi(x, y)$ be the predicate $x > y$.

        1. Consider the formula $\forall y. \exists x. (x > y)$. This statement says "For every real number $y$, there exists a real number $x$ that is greater than $y$." This is **true** (for any $y$, we can choose $x = y + 1$).
        2. Consider the formula $\exists x. \forall y. (x > y)$. This statement says "There exists a real number $x$ that is greater than every real number $y$." This is **false** (no such "maximum" real number exists, as for any $x$, the statement $x > x$ is false).

        Since we found a domain and an interpretation where one formula is true and the other is false, they are not equivalent.

???+ exercise "_Exercise_"

    Write a formula equivalent to the following one without any negation symbols,

    $$\neg\left(\exists\varepsilon>0.\forall\delta>0.\exists x>0.\exists y>0.\left(\left|x-y\right|<\delta\land\left|x-y\right|>\varepsilon\right)\right)$$

    ??? solution

        To solve this exercise we need to use two previous results, the first onw being <a href="#claim-forall-and-exists-are-inverses">forall and exists are inverses</a>, and the second one is <a href="#claim-de-morgans-laws">De Morgan's laws</a>,


        $$\begin{align*}
        \neg\left(\exists\varepsilon>0.\forall\delta>0.\exists x>0.\exists y>0.\left(\left|x-y\right|<\delta\land\left|x-y\right|>\varepsilon\right)\right) & \equiv\forall\varepsilon>0.\neg\left(\forall\delta>0.\exists x>0.\exists y>0.\left(\left|x-y\right|<\delta\land\left|x-y\right|>\varepsilon\right)\right)\\
        & \equiv\forall\varepsilon>0.\exists\delta>0.\neg\left(\exists x>0.\exists y>0.\left(\left|x-y\right|<\delta\land\left|x-y\right|>\varepsilon\right)\right)\\
        & \equiv\forall\varepsilon>0.\exists\delta>0.\forall x>0.\neg\left(\exists y>0.\left(\left|x-y\right|<\delta\land\left|x-y\right|>\varepsilon\right)\right)\\
        & \equiv\forall\varepsilon>0.\exists\delta>0.\forall x>0.\forall y>0.\neg\left(\left|x-y\right|<\delta\land\left|x-y\right|>\varepsilon\right)\\
        & \equiv\forall\varepsilon>0.\exists\delta>0.\forall x>0.\forall y>0.\left(\left(\neg\left(\left|x-y\right|<\delta\right)\right)\lor\left(\neg\left(\left|x-y\right|>\varepsilon\right)\right)\right)\\
        & \equiv\forall\varepsilon>0.\exists\delta>0.\forall x>0.\forall y>0.\left(\left(\left|x-y\right|\ge\delta\right)\lor\left(\left|x-y\right|\le\varepsilon\right)\right)
        \end{align*}$$
