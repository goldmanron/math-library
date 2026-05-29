!!! quote

    ”The best thing about a boolean is even if you are wrong, you are only off by a bit.”

The primary goal of logic is to deduce correct conclusions. The logical framework is broadly divided into two domains: **syntax** (the grammar and structural rules of the language) and **semantics** (the essential meaning and truth-values assigned to those structures).

## Propositional Logic

Given are two claims: "Today is Wednesday" and "I like salty fish". We can create a new claim from them, "Today is Wednesday and I like salty fish". The composition of claim $A$ and claim $B$ into $A \text{ and } B$ is correct if and only if **both** claims $A$ and $B$ are correct. It is possible to compose claims using the connective  "or" as well, producing a new claim, that is correct if and only if **at least** one of claims $A$ and $B$ is correct. It is natural to define a negation operation as well (I have money - I don't have money). A more unnatural logical connective is "if then", and there is also "if and only if". 

### Syntax and Formulas

!!! def "_Definition_: Propositional Calculus Alphabet"

    Let $\{p_i\}_{i \in \mathbb{N}}$ be a set of _variable symbols_, then the propositional calculus alphabet is the set:
    $$
    \Sigma \triangleq \\{p_i\\}_{i \in \mathbb{N}} \cup \\{\land, \lor, \neg, \to, \leftrightarrow, (, )\\}
    $$

A proposition or formula is a string that has a valid syntax. The syntax is defined using specific structural rules. A formula can contain variables, parentheses, and logical connectives.

!!! def "_Definition_: Set of Propositions"

    The set of propositions is the smallest set $X$ with the following properties:
    
    1. Every variable is in the set (it is a proposition): $\{p_i\}_{i \in \mathbb{N}} \subseteq X$.
    2. If $\varphi, \psi \in X$, then $(\neg \varphi),(\varphi \land \psi),(\varphi \lor \psi),(\varphi \to \psi),(\varphi \leftrightarrow \psi) \in X$.

### Induction

!!! claim "_Claim_: Induction on Numbers"

    To show that every natural number has a property $P \subseteq N$, it is sufficient to show:
    
    * **Base:** $0$ has property $P$ ($0 \in P$).
    * **Step:** If a number $n \in P$ has property $P$ ($n \in P$), then $n+1$ has property $P$ ($n+1 \in P$).

!!! claim "_Claim_: Structural Induction"

    To prove that every formula has a property $P$, it is sufficient to prove:
    
    * **Base:** Every variable has this property.
    * **Step:** If strings $\varphi, \psi$ have this property, then applying one of the logical operators on them also produces a string with this property.

!!! mexample "_Example_: Even Number of Parentheses"

    We can prove that every formula has an even number of parentheses.
    
    * **Base:** $0$ is an even number (a single variable has no parentheses).
    * **Step:** If in $\varphi$ there is an even number of parentheses, then in $(\neg \varphi)$ there is also an even number of parentheses (even + 2 + even = even). It can be shown in the same way for the rest of the logical operators.

!!! mexample "_Example_: Parentheses and Connectives"

    The number of open parentheses equals the number of connectives.
    
    * **Base:** Immediate, in a single variable there are no parentheses.
    * **Step:** Notice that in $(\varphi \text{ op } \psi)$, the number of open parentheses is equal to the number of connectives ($\text{op}$).

!!! mnote "_Note_: Proving Properties of Formulas"

    Sometimes we will use induction on the length of the formula, or induction on the number of connectives in the formula.

!!! mexample "_Examples_: Formulas and Non-Formulas"

    **Valid Formulas:**

    - $p_7$
    - $(p_7 \to p_{11})$

    **Invalid Strings (Non-Formulas):**

    - $(p_7)$ - The number of open parentheses is not equal to the number of connectives, since there are no connectives but there are open parentheses.
    - $p_7 \to p_7$ - Missing parentheses; the number of open parentheses is different from the number of connectives.
    - $() \to )$ - The number of open parentheses is not identical to the number of connectives, and the number of open parentheses does not equal the number of closed parentheses.
    - $\neg p_7$ - Same argument regarding the missing open parentheses.

### Inductive Definitions

!!! mexample "_Example_: Inductive Definitions"

    Examples of an inductive definition for mathematical functions:

    $$
    \begin{cases} 
    \textrm{fact}(0) = 1 \\
    \textrm{fact}(n+1) = (n+1) \cdot \textrm{fact}(n)  \\
    \end{cases}
    $$
    
    This is the definition for the factorial function.
    
    Another example:
    
    $$
    \begin{cases} 
    g(0) = 1 \\
    g(n+1) = h(n, g(n)) 
    \end{cases}
    $$
    
    Where $h(x,y) = (x+1) \cdot y$.

!!! def "_Definition_: Rank"

    We define a Rank function from formulas to natural numbers:

    * $\mathrm{Rank}(var) = 1$
    * $\mathrm{Rank}((\varphi \text{ op } \psi)) = \max(\mathrm{Rank}(\varphi), \mathrm{Rank}(\psi)) + 1$
    
    The definition was made using structural induction, since we defined the base on a variable and the step on a proposition of 2 variables with a logical connective.

!!! def "_Definition_: Parsing Tree"

    Defining a Parsing Tree (PT) of a formula by structural induction:
    
    * **Base:** For a variable $p$, the parsing tree is a single node $p$.
    * **Step:** For a complex formula, the root is the logical connective, and the children are the parsing trees of the sub-formulas. For example, for $(\varphi \land \psi)$ or $(\varphi \lor \psi)$ or $(\varphi \to \psi)$, the root is the connective and it has children $\varphi$ and $\psi$. For negation $(\neg \psi)$, the root is $\neg$ and it has a single child $\psi$.

### Formation Sequence

!!! def "_Definition_: Formation Sequence"

    A finite sequence of strings $\{\varphi_i\}_{i \in [k]}$ such that for every $i$, one of the following conditions holds:
    
    1. $\varphi_i$ is a variable.
    2. There exist $j, l < i$ such that $\varphi_i = (\varphi_j \text{ op } \varphi_l)$ (meaning $\varphi_i$ is composed of 2 strings that appeared before it in the sequence).
    
    $\varphi_1, \ldots, \varphi_k$ is a formation sequence for $\varphi$ if $\varphi_k \equiv \varphi$.

!!! mexample "_Example_: Formation Sequences"

    * $p_1, p_7, (p_1 \to p_7)$ is a formation sequence for $(p_1 \to p_7)$.
    * $\neg (p_3)$ is not a formation sequence.
    * $p_1, p_2, (p_1 \to p_2)$ is a formation sequence for $(p_1 \to p_2)$. Notice that adding an unused variable like $p_7$ into the sequence is optional and valid, making the sequence non-minimal.
    * $p_1, p_2, (p_{10} \to p_{10})$ is **not** a formation sequence for $(p_1 \to p_2)$ because $(p_1 \to p_2)$ does not appear at the end of the sequence, and the variable $p_{10}$ is introduced.

!!! claim "_Claim_: Every Formula Has a Formation Sequence"

    Every formula $\varphi$ has a formation sequence.

    ??? proof
        By structural induction.
        * **Base:** Clear, a variable is a formation sequence of itself.
        * **Step:** If $\varphi, \psi$ have formation sequences, we can concatenate their formation sequences and finally add the connective $\text{op}$ to reach a formation sequence for the combined formula.

!!! claim "_Claim_: Validity of a Formation Sequence"

    If a string has a formation sequence, then it is a formula.

    ??? proof
        By induction on the length of the sequence.
        * **Base:** A sequence of length 1 is defined as valid only if the first element is a variable, which is a formula in particular.
        * **Step:** Assume this is true for sequences smaller than length $k+1$, and we will prove it for $k+1$. Given the sequence $\varphi_1, \varphi_2, \ldots, \varphi_k, \varphi_{k+1}$.
        The prefix of the formation sequence is itself a valid formation sequence. Therefore, we will conclude that $\varphi_{k+1}$ is either a variable, or was obtained from predecessors according to the definition of building formulas. In both cases, this will be a formula. Thus, the existence of the formation sequence guarantees that this string is a formula.

### Abstract and Concrete Syntax

An example of abstract syntax is parsing trees, as we saw earlier. 
An example of concrete syntax is the notations used for logical connectives, which can sometimes have multiple textual representations (e.g., $\land$ vs "and" vs "&&"). In concrete syntax, strings are written linearly in a row.

!!! def "_Definition_: Parentheses Saving Rules"

    To make concrete syntax cleaner, we apply rules to save parentheses:
    
    1. **No Outer Parentheses:** We do not put outer parentheses around the entire formula. For example, instead of writing $((p_1 \land p_2) \lor p_3)$, we drop the outermost ones and write $(p_1 \land p_2) \lor p_3$. In addition, for $(\neg b)$ there is a shortcut to simply write $\neg b$.
    2. **Precedence Mechanism:** We evaluate connectives based on priority. First $\neg$, then $\land, \lor$, and then $\to, \leftrightarrow$.
    
    More explicitly:
    
    1. $\neg$
    2. $\land, \lor$
    3. $\to$
    4. $\leftrightarrow$

    For example, $p_1 \to p_2 \to p_3$ is evaluated as $(p_1 \to (p_2 \to p_3))$, and $\neg p_1 \lor p_2$ is evaluated as $((\neg p_1) \lor p_2)$.

### Unique Readability

!!! thm "_Theorem_: Unique Readability"

    This is an extremely important theorem regarding syntax:
    
    1. There exists an algorithm that checks whether a given string is a valid formula.
    2. If a string is a formula, then exactly one of the following conditions holds:
        * It is a variable.
        * It is of the form $(\varphi_1 \text{ op } \varphi_2)$ where $\varphi_1, \varphi_2$ are formulas.
        * It is of the form $(\neg \varphi_i)$ where $\varphi_i$ is a formula.
    3. If $\varphi$ is a variable, then there is a unique index $i$ such that $\varphi \equiv p_i$.
    4. If there are $\varphi_1, \varphi_2 \in \mathcal{F}$ such that $\varphi \equiv (\varphi_1 \text{ op } \varphi_2)$, then $\varphi_1$ and $\varphi_2$ are unique.
    5. Similar to point 4, this uniqueness also applies to the unary operator $\neg$.

### Substitution

!!! def "_Definition_: Substitution"

    We denote substitution as $\varphi\{\frac{\alpha}{p}\}$, where $\varphi$ and $\alpha$ are formulas and $p$ is a variable. This is the formula obtained from $\varphi$ after replacing all occurrences of $p$ with $\alpha$.
    
    **Inductive Definition:**

    * **Base:** For a variable $q$:
      1. If $q \equiv p$, then the result is $\alpha$.
      2. If $q \not\equiv p$, then the result is $q$.
    * **Step:** $\varphi\{\frac{\alpha}{p}\} := \begin{cases} (\psi_1\{\frac{\alpha}{p}\} \text{ op } \psi_2\{\frac{\alpha}{p}\}) & \text{if } \varphi \equiv (\psi_1 \text{ op } \psi_2) \\ (\neg \psi_1\{\frac{\alpha}{p}\}) & \text{if } \varphi \equiv (\neg \psi_1) \end{cases}$

!!! def "_Definition_: Simultaneous Substitution"

    We simply substitute simultaneously all the designated formulas $\alpha_i$ in place of the $p_i$'s:
    
    $$
    \varphi\{\frac{\alpha_1}{p_1}, \frac{\alpha_2}{p_2}, \frac{\alpha_3}{p_3}, \,\ldots\}
    $$
    
    Note that $p_1, \dots, p_k$ must be distinct.

!!! claim "_Claim_: Substitution is Non-Commutative"

    Is it true that $(\varphi\{\frac{\alpha}{p}\})\{\frac{\beta}{q}\} = \varphi\{\frac{\alpha}{p}, \frac{\beta}{q}\} = (\varphi\{\frac{\beta}{q}\})\{\frac{\alpha}{p}\}$?
    
    **No.** Using logical juggling of substitutions and quantifiers, this claim can be refuted, proving that the order of sequential substitutions generally matters.
