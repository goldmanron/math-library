!!! warning "This page is still under construction"

Mathematical logic is a branch of mathematics that deals with the expression of simple and complex mathematical statements. It allows for the removal of the multiplicity of meanings that exists in human languages by establishing precise rules for presenting different statements in a way that can be understood in only one way. Logic also deals with systems of rules for drawing valid conclusions from data or assumptions in our possession.

!!! mexample "_Example_: Uncertainty in Language"

    When you are in a restaurant and ask for a Coke, the waitress asks, "Would you like regular *or* zero?" Of course, the word *or* in this case refers to the choice between one of the two and not both, on the other hand, when asked, "Are you hungry *or* thirsty?" You can mean either one of the two or perhaps both at the same time, meaning that the word *or* has a double meaning depending on the context.

Logic began its journey in ancient Greece as a branch of philosophy, but following many significant developments in its formal directions, it is now also considered a branch of mathematics. Logic serves as the central theoretical basis for computer science. It is necessary, for example, when we want to "talk" to a machine (such as a computer), because communication with a computer must be very precise and unambiguous, and must comply with predetermined logical rules. Developing logical thinking is also necessary for dealing with various and diverse problems, especially in the fields of science and technology, which require precise and orderly analysis of processes and ideas. In addition, the ability to justify arguments accurately while avoiding logical fallacies that would harm the validity of conclusions is a central tool in mathematics and computer science.

## Propositional Calculus

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

### Logical Connectives

Until now we talked about atomic sentence in mathematics but we still can't express complex sentences, for that we need connectives between atomic sentences.

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

#### Sentence

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

### Values of Sentences

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

!!! claim "_Claim_"

    Let $A_1, \ldots, A_n$ be atomic sentences then there are overall $2^n$ possible assignments of all the atomic sentences to truth values.

    ??? proof

        Each atomic sentence $A_i$ can be assigned to either $\true$ or $\false$, therefore each $A_i$ has two options for it's assignment, and the atomic sentences don't have any connection between then (since they are atomic, and therefore the choice of their values is arbitrary). Hence overall there are

        $$\underbrace{2\cdot\ldots\cdot2}_{n}=2^{n}$$

        assignments of truth values to $A_1, \ldots, A_n$.

Now because we know that there are only finite number of assignments possible for a collection of atomic sentences, we can create a table that summarizes the truthfulness of each logical connective!

!!! def "_Definition_: Truth Table"

    A table that summarizes the truth value of a complex sentence given a change in the truth assignment of each of the atomic sentences that he's composed of.

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

### Equivalence of Sentences

After talking about sentences and their truth value, we want to be able to distinguish different logic sentences, for example we know that "Today is Monday and tomorrow is Tuesday" is equivalent to saying "Tomorrow is Tuesday and today is Monday", but we want to give this a formal definition,

!!! def "_Definition_: Sentence Equivalence"

    Let $A$ and $B$ be sentences such that, for every truth assignment of the atomic sentences the following holds,

    $$V\left(A\right) = V\left(B\right)$$

    then we call $A$ and $B$ equivalent sentences, and use the notation $A \equiv B$.

!!! mnote "_Note_"

    Given two sentences $\varphi$ and $\psi$, if the truth table of $\varphi$ and $\psi$ is the same then we know that they are equivalent, this is because by definition the truth table shows us the result of the truth assignment for $\varphi$ and $\psi$ under every truth assignment to the atomic sentence that makes them.

Now that we know how to prove equivalence of sentences we want to show some commonly used results that will be very important for your entire math journey.

First of all we show that conjunction and disjunction are commutative, this is a neat trick to use when needed!

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

Secondly we show that conjunction and disjunction are associative, this is very useful for reducing complex sentences by shuffling the parentheses around them.

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

Thirdly we show that conjunction and disjunction are distributive over one another, this is also very useful for reducing complex sentences by being able to pull out conjunctions and disjunctions.

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

Given two sentences that imply each other, we know that this means that they are both true or false together, hence this is the strongest relationship two sentences can have.

!!! def "_Definition_: If and Only If"

    Let $A$ and $B$ be sentences such that,

    $$\left(A\implies B\right)\land\left(B\implies A\right)$$

    Then we use the notation $A\iff B$ and say that "$A$ if and only if $B$", or abbreviated to "$A$ iff $B$".

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

!!! def "_Definition_: Semantically Entailment Sentence"

    Let $A_1,\ldots , A_n$ be sentences and let $B$ be a sentence, such that the following holds,

    $$\left(\text{For all $i$ in range $1$ to $n$ we have} V\left(A_i\right) = \true\right) \implies V\left(B\right) = \true$$

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

After dealing with sentences in [propositional calculus](#propositional-calculus) we want to deal with sentences that contain variables and quantifiers on those variables.

!!! def "_Definition_: Predicate"

    A predicate in $n$ variables is a proposition in $n$ terms.

The proposition "There exists $x$ such that $x^2 = -1$" is a predicate in one variable, but on which domain does this defined? Does it even have meaning for all mathematical object? Likewise the proposition "For all $x, y$ holds that $x > y$" is a predicate in two variables, but again we don't know that is the domain of $x, y$, are they numbers? Maybe they're some arbitrary objects?

### Quantifiers

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

As explained earlier, there is a problem in writing a general formula in predicate calculus, this is since it is not clear from where the variables in the expression come from, so we will define the domain of discourse to be the domain from which the variables come. But also, when it is clear what the domain is, we will not specify it (as in the formula $\exists x.x=1$ where it is clear that we are working over some number system that was disclosed beforehand).

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

    Let $\varphi$ be a formula, then,

    $$\forall x.\forall y.\varphi\left(x,y\right)\equiv\forall y.\forall x.\varphi\left(x,y\right)$$

    ??? proof

        TODO

???+ exercise "_Exercise_: Exists Quantifiers are Interchangeable"

    Let $\varphi$ be a formula, then,

    $$\exists x.\exists y.\varphi\left(x,y\right)\equiv\exists y.\exists x.\varphi\left(x,y\right)$$

    ??? solution

        TODO

!!! claim "_Claim_: Forall Quantifier is Distributive Over Conjunction"

    Let $\varphi$ and $\psi$ be formulas, then,

    $$\forall x.\left(\varphi\left(x\right)\land\psi\left(x\right)\right)\equiv\left(\forall x.\varphi\left(x\right)\right)\land\left(\forall y.\psi\left(y\right)\right)$$

    ??? proof

        TODO

!!! exercise "_Exercise_: Exists Quantifier is Distributive Over Disjunction"

    Let $\varphi$ and $\psi$ be formulas, then,

    $$\exists x.\left(\varphi\left(x\right)\lor\psi\left(x\right)\right)\equiv\left(\exists x.\varphi\left(x\right)\right)\lor\left(\exists y.\psi\left(y\right)\right)$$

    ??? solution

        TODO

!!! claim "_Claim_: Exists and Forall Quantifiers are Not Interchangeable"

    There exists a formula $\varphi$ for which,

    $$\exists x.\forall y.\varphi\left(x,y\right)\not\equiv\forall y.\exists x.\varphi\left(x,y\right)$$

    ??? proof

        TODO

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
