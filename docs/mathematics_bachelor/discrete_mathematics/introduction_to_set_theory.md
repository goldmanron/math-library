!!! warning "This page is still under construction"

In set theory, the central object we study is (surprisingly) sets. Despite being the central object in the field, this course will not give formal definitions of this object. This is because mathematics, like any branch, is based on definitions and axioms that we agree are correct and from there we progress. Therefore, here we will use sets naively and intuitively without delving into the axioms according to which they behave. (But this is no excuse for non-formalism! Everything will still be formal and precise.)

!!! mnote "_Note_: Domain of Discourse in Set Theory"

    In this field and in most of mathematics the domain of discourse is "Set Theory" itself, meaning all objects we talk about are sets, hence we will not include the domain of discourse in proofs anymore.

!!! mnote "_Note_: Base Assumptions"

    All logic in this chapter is based on a system of axioms called $\mathrm{ZF}$, beyond this chapter we will always use the axiom system $\mathrm{ZFC}$ (we assume the axiom of choice in this course).

## Sets

!!! def "_Definition_: Set (Non formal)"

    A set is a collection of elements without importance for order and without repetitions, it is commonly denoted by curly brackets $\{\}$ between which are all the elements belonging to the set, or if all the elements cannot be listed, a certain rule for creating the elements.

### Set Construction Schemes

Now given what a set **is**, we want to understand how to construct sets.

There are three ways to define/build a set in set theory, the "Listing Method", the "Schema of Separation" and the "Set-Builder Notation using a Formula".

#### Listing Method

The first method is the most straight-forward one, and just consist of defining a list of elements.

!!! def "_Definition_: Listing Method"

    Let $a_1, \ldots, a_n$ be objects, then we can build a set as,

    $$\{a_1, \ldots, a_n\}$$

    ??? mnote "_Note_"

        The "listing form" may also be called "roster form", "tabular form" or "extensional definition".

!!! mexample "_Example_"

    We can build the following sets,

    - $\left\{1, \ldots, 100\right\}$ (Note that the use of ellipses in the definition of a set is prohibited unless the pattern is clear!)
    - $\left\{ \left\{ 1\right\} ,\left\{ 2\right\} \right\}$

!!! def "_Definition_: Singleton"

    A singleton is a set with only one element.

    Formally, let $a$ be an object, then the set $\{a\}$ is called a singleton.

!!! def "_Definition_: Element Belongs to a Set Constructed Using the Listing Method"

    Let $a_1, \ldots, a_n$ be objects, and let $a$ be an object, such that,

    $$\exists i.a=a_{i}$$

    then we say that "$a$ belongs to $\{a_1, \ldots, a_n\}$", and notate it using $a \in \{a_1, \ldots, a_n\}$.

    ??? mnote "_Note_"

        We also use this equivalent phrases,

        - $a$ is in $\{a_1, \ldots, a_n\}$.
        - $a$ is a member of $\{a_1, \ldots, a_n\}$.

!!! mexample "_Example_"

    Those are some examples on "belonging to a set",

    - $1 \in \{1\}$
    - $\left\{ 1\right\} \in\left\{ \left\{ 1\right\} ,\left\{ 2\right\} ,1,2\right\}$
    - $\left\{ 2,2\right\} \in\left\{ \left\{ 2\right\} \right\}$

#### Schema of Separation

The second method is actually an axiom in the $\mathrm{ZF}$ axioms, and it what allows us to create sets from existing sets using a rule.

!!! axiom "_Axiom_: Schema of Separation"

    <div id="definition-schema-of-separation"></div>
    Let $A$ be a set, and let $\varphi$ be a predicate over $A$, then we can build a set as,

    $$\{x\in A\mid \varphi\left(x\right)\}$$

    ??? mnote "_Note_"

        The "schema of separation" may also be called "schema of specification", "schema of restricted comprehension" or "set-builder notation".

!!! def "_Definition_: Element Belongs to a Set Constructed Using the Schema of Separation"

    <div id="definition-element-belongs-to-a-set-constructed-using-the-schema-of-separation"></div>
    Let $A$ be a set, let $\varphi$ be a predicate over $A$, and let $a$ be an object, such that,

    $$\left(a\in A\right)\land\phi\left(a\right)$$

    then we say that "$a$ belongs to $\left\{ x\in A\mid\phi\left(x\right)\right\}$", and notate it using $a \in \left\{ x\in A\mid\phi\left(x\right)\right\}$.

    ??? mnote "_Note_"

        We also use this equivalent phrases,

        - $a$ is in $\left\{ x\in A\mid\phi\left(x\right)\right\}$.
        - $a$ is a member of $\left\{ x\in A\mid\phi\left(x\right)\right\}$.

#### Schema of Replacement

The third method is also an axiom in the $\mathrm{ZF}$ axioms, and it what allows us to create sets by altering elements from an existing set.

!!! axiom "_Axiom_: Schema of Replacement"

    Let $A$ be a set, and let $f$ be an action on the elements of $A$, then we can build a set as,

    $$\{f\left(x\right)\mid x\in A\}$$

    ??? mnote "_Note_"

        The "schema of replacement" may also be called "set-builder notation".

!!! def "_Definition_: Element Belongs to a Set Constructed Using the Schema of Replacement"

    Let $A$ be a set, let $f$ be an action on the elements of $A$, and let $a$ be an object, such that,

    $$\exists b\in A.f\left(b\right)=a$$

    then we say that "$a$ belongs to $\{f\left(x\right)\mid x\in A\}$", and notate it using $a \in \{f\left(x\right)\mid x\in A\}$.

    ??? mnote "_Note_"

        We also use this equivalent phrases,

        - $a$ is in $\{f\left(x\right)\mid x\in A\}$.
        - $a$ is a member of $\{f\left(x\right)\mid x\in A\}$.

#### Set Construction Conventions

Now that we know how to construct a set, and what does it mean for an object to be a member of a set, we can set a few conventions, and prove some things.

!!! def "_Definition_: Element Doesn't Belongs to a Set"

    Let $A$ be a set, and let $a$ be an object, such that,

    $$\neg\left(a \in A\right)$$

    then we say that "$a$ doesn't belong to $A$", and notate it using $a \notin A$.

    ??? mnote "_Note_"

        We also use this equivalent phrases,

        - $a$ is not in $A$.
        - $a$ is not a member of $A$.

!!! mexample "_Example_"

    Those are some examples on "not belonging to a set",
    
    - $\left\{ 3\right\} \notin\left\{ 1,2,3\right\}$.
    - $4 \notin \{0, 1, 2, 3\}$.
    - $5\notin \{x + 1\mid x \in \{5, 6, 7\}\}$.

!!! mnote "_Note_"

    Let $\varphi$ be a formula or a predicate, and let $A$ be a set, then we will use the following notation,

    $$\forall x \in A. \varphi\left(x\right)$$

    to say that the object $x$ comes from the set $A$, and formally this is equivalent to the following,

    $$\forall x.\left(x\in A\right)\implies\varphi\left(x\right)$$

!!! mnote "_Note_"

    Let $\varphi$ be a formula or a predicate, and let $A$ be a set, then we will use the following notation,

    $$\exists x \in A. \varphi\left(x\right)$$

    to say that the object $x$ comes from the set $A$, and formally this is equivalent to the following,

    $$\exists x.\left(x\in A\right)\land\varphi\left(x\right)$$

##### Set of All Sets

In the start of Set Theory the set construction schemes discussed above were not established, and it was accepted that **any** class of objects that can be expressed using a rule is a set, but that changed after an English mathematician named Bertrand Russell showed that there are paradoxes that arise from this assumption.

!!! thm "_Theorem_ [Russell 1901]: Russell's Paradox"

    <div id="theorem-russells-paradox"></div>
    There exists a predicate $\varphi\left(x\right)$ such that $\{x \mid \varphi\left(x\right)\}$ isn't a set.

    ??? proof

        We define the predicate as,

        $$\varphi\left(x\right) = \left(x\notin x\right)$$

        and now want to prove that $A = \{x \mid \varphi\left(x\right)\}$ isn't a set.

        For that we first note that either $A \in A$ or $A \notin A$, but we will now show that both cases are impossible,

        - If $A \in A$, then by the definition of <a href="#definition-element-belongs-to-a-set-constructed-using-the-schema-of-separation">element belongs to a set constructed using the schema of separation</a> we know that $\varphi\left(A\right)$ must be true, hence we know that $A \notin A$, which is a contradiction to our assumption.
        - If $A \notin A$, then by the definition of <a href="#definition-element-belongs-to-a-set-constructed-using-the-schema-of-separation">element belongs to a set constructed using the schema of separation</a> we know that $\varphi\left(A\right)$ must be false, hence we know that $A \in A$, which is again a contradiction to our assumption.

        all in all we get that no matter what the set $A$ can't exists since it creates a paradox.

!!! corollary "_Corollary_: Set of All Sets"

    The set of all sets does't exists.

    Formally, this means that there isn't a set $\mathbb{S}$ such that,

    $$\forall A. A\in\mathbb{S}$$

    ??? proof

        We assume by contradiction that there is a set of all sets, meaning that there is a set $\mathbb{S}$ such that,

        $$\forall A. A\in\mathbb{S}$$

        then for every predicate $\varphi$, we can define a set by the <a href="#definition-schema-of-separation">schema of separation</a> like so,

        $$\mathcal{A}_{\varphi} = \{ x\in\mathbb{S}\mid \varphi\left(x\right)\}$$

        but this is a contradiction to <a href=#theorem-russells-paradox>Russell's paradox</a>.

##### Finite Cardinality

There is another quantity that can be useful to know for sets, their cardinality, or informally their "size".

!!! def "_Definition_: Finite Cardinality (Non formal)"

    Let $a_1, \ldots, a_n$ be objects, then we define,

    $$\left|\{a_1, \ldots, a_n\}\right| = n$$

While this definition seems trivial and non-helpful, it will be a major topic in the end of the course.

!!! mexample "_Example_"

    The following statements are true,

    - $\left|\{0, 1, 2\}\right| = 3$
    - $\left|\{1, 2, 1, 2, 1\}\right| = 2$
    - $\left|\{0.5, 0.6, 0.7, 0.8, 0.9, 1\}\right| = 6$

### Common Sets

This are some base sets that are used everywhere in mathematics.

#### Empty Set

The empty set is the trivially "empty" set, this set has no elements by construction, and while this set sounds as boring as a set can get, it actually has some unique properties we will explore later on.

!!! def "_Definition_: Empty Set"

    Let $\mathcal{E}$ be a set such that,

    $$\forall a. a\notin \mathcal{E}$$

    then we call $\mathcal{E}$ an empty set.

!!! mnote "_Note_: Cardinality of an Empty Set"

    Let $\mathcal{E}$ be an empty set, then,

    $$\left|\mathcal{E}\right| = 0$$

#### Integer Numbers

!!! def "_Definition_: Natural Numbers (Non formal)"

    A natural number is a positive whole number, and we use the following notation,

    $$\mathbb{N} = \{0, 1, 2, 3, \ldots\}$$

!!! def "_Definition_: Positive Integers"

    $$\mathbb{N}_{+} = \{n\in\mathbb{N} \mid n \ge 1\}$$

!!! def "_Definition_: Even Numbers"

    $$\mathbb{N}_{\mathrm{even}} = \{2n \mid n \in\mathbb{N}\}$$

!!! def "_Definition_: Odd Numbers"

    $$\mathbb{N}_{\mathrm{odd}} = \{2n + 1 \mid n \in\mathbb{N}\}$$

<!-- !!! def "_Definition_: Prime Numbers"

    $$\mathbb{P} = \{p \in\mathbb{N} \mid p \text{ is prime}\}$$ -->

!!! def "_Definition_: Integers (Non formal)"

    An integer is a whole number, and we use the following notation,

    $$\mathbb{Z} = \{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\}$$

##### Induction

!!! thm "Induction on Natural Numbers"

    <div id="theorem-induction-over-natural-numbers"></div>
    Let $P$ be a predicate over $\bbn$, such that, $P\left(0\right)$ is true, and, forall $n\in\bbn$ if $P\left(n\right)$ is true then $P\left(n + 1\right)$ is true, then we can infer that,

    $$\forall n\in\bbn. P\left(n\right)$$

    ??? proof

        Formally we are trying to prove the following claim,

        $$\left(P\left(0\right)\land\left(\forall n\in\bbn.P\left(n\right)\implies P\left(n+1\right)\right)\right)\implies\left(\forall n\in\bbn.P\left(n\right)\right)$$

        for that, we assume the prefix, and now try to prove the suffix.

        Let's assume by contradiction that the suffix is not true, meaning that,

        $$\exists n\in\bbn.\left(\neg P\left(n\right)\right)$$

        now since we know that such an $n$ exists, we can choose $k \in \bbn$ to be the minimal natural number for which $\neg P\left(n\right)$ is true.

        Now because we know that $P\left(0\right)$ is true, we get that $k \ge 1$, and hence $k - 1 \in \bbn$. Then from the minimality of $k$ we get that $P\left(k - 1\right)$ is true, and from our assumption we get that
        
        $$P\left(k - 1\right) \implies P\left(k\right)$$

        meaning that $P\left(k\right)$ is true, which is a contradiction to the choosing of $k$.

!!! claim "_Claim_"

    Let $n\in\bbn$, then

    $$0 + 1 + 2 + \ldots + n = \frac{n\cdot \left(n - 1\right)}{2}$$

    ??? proof

        We define a predicate $P\left(n\right)$ to be the truth value of the equation,

        $$0 + 1 + 2 + \ldots + n = \frac{n\cdot \left(n + 1\right)}{2}$$
        
        Now we see that,

        $$0 = \frac{0\cdot \left(0 + 1\right)}{2}$$

        and hence $P\left(0\right)$ is true.

        Also, let $k\in\bbn$ such that $P\left(k\right)$, then we get that,

        $$\begin{align*}
        0+1+2+\ldots+\left(k+1\right) & =\left(0+1+2+\ldots+k\right)+\left(k+1\right)\\
        & =\frac{k\cdot\left(k+1\right)}{2}+\left(k+1\right)\\
        & =\frac{\left(k+1\right)\cdot k}{2}+\frac{2\left(k+1\right)}{2}\\
        & =\frac{\left(k+1\right)\cdot k+2\left(k+1\right)}{2}\\
        & =\frac{\left(k+1\right)\cdot\left(k+2\right)}{2}
        \end{align*}$$

        And finally from the <a href=#theorem-induction-over-natural-numbers>induction theorem</a> we get that $\forall n\in \bbn. P\left(n\right)$, meaning that our original claim is true.

##### Rational Numbers

Rational numbers are just fractions, a whole number divided by another whole number.

!!! def "_Definition_: Rational Numbers"

    $$\mathbb{Q} = \left\{\frac{m}{n} \bmid m\in\mathbb{Z} \land n\in\mathbb{N}_{+}\right\}$$

!!! mexample "_Example_"

    The following numbers are rational,

    - $0.5 = \frac{1}{2}$
    - $-0.75 = \frac{-3}{4}$
    - $\frac{1}{2} = \frac{4}{8}$
    - $0.333\ldots = \frac{1}{3}$
    - $1 = \frac{1}{1}$
    - $-5 = \frac{-5}{1}$

#### Real Numbers

The real numbers are way more difficult to define or give an intuitive meaning to.

The real numbers are all the numbers that lay on that "real line", which is the continuous version of the rational numbers line.

!!! def "_Definition_: Real Numbers (Non formal)"

    $$\mathbb{R} = \left\{\ldots, -7.1357, \pi, 0, 1, \frac{1}{3}, 67, \ldots\right\}$$

And we can also define the positive real numbers,

!!! def "_Definition_: Positive Real Numbers"

    $$\bbr_+ = \left\{x\in\bbr\mid x>0\right\}$$

!!! claim "_Claim_ [Bernoulli 1689]: Bernoulli's Inequality"

    Let $r\in\bbn$, and let $x\in\bbr$ such that $x\ge -1$, then,

    $$\left(1 + x\right)^{r} \ge 1 + rx$$

    ??? proof

        We want to prove this claim using induction on $r$.

        Let $r = 0$, then we get that,

        $$\left(1+x\right)^{r} = \left(1+x\right)^{0} = 1 = 1 + 0\cdot x = 1+rx$$

        as required.

        Now let's assume that the claim holds for some $r\in\bbn$, and try to prove the claim for $r+1$, this can be done as follows,

        $$\begin{align*}
        \left(1+x\right)^{r+1}=&\left(1+x\right)^{r}\left(1+x\right)\ge\left(1+rx\right)\left(1+x\right)\\=&1+rx+x+rx^{2}\ge1+rx+x\\=&1+\left(r+1\right)x
        \end{align*}$$

        And hence we get from the <a href=#theorem-induction-over-natural-numbers>induction theorem</a> that the claim is true.

!!! def "_Definition_: Floor Value"

    Let $x\in\bbr$, then we define,

    $$\floor{x} = \max\left\{ n\in\bbz \mid n \le x \right\}$$

!!! def "_Definition_: Ceiling Value"

    Let $x\in\bbr$, then we define,

    $$\ceil{x} = \min\left\{ n\in\bbz \mid n \ge x \right\}$$

!!! mexample "_Example_"

    The following are examples for the ceil and floor values,
    
    - $\floor{1.1} = 1$
    - $\ceil{1.1} = 2$
    - $\floor{10.0} = 10$
    - $\ceil{-5.4} = -5$
    - $\ceil{0} = 0$
    - $\floor{-0.5} = -1$

##### Intervals

An interval in a broad sense is a continuous section of the real numbers.

!!! def "_Definition_: Open Interval"

    Let $a, b\in\bbr$, then we define,

    $$\left(a,b\right)=\left\{ x\in\bbr\mid a<x<b\right\}$$

    We also define,

    $$\left(a,\infty\right)=\left\{ x\in\bbr\bmid a<x\right\}$$

    and,

    $$\left(-\infty,b\right)=\left\{ x\in\bbr\bmid x<b\right\}$$

!!! def "_Definition_: Open-Closed Interval"

    Let $a, b\in\bbr$, then we define,

    $$\left(a,b\right]=\left\{ x\in\bbr\mid a<x\le b\right\}$$

    We also define,

    $$\left(-\infty,b\right]=\left\{ x\in\bbr\bmid x\le b\right\}$$

!!! def "_Definition_: Closed-Open Interval"

    Let $a, b\in\bbr$, then we define,

    $$\left[a,b\right)=\left\{ x\in\bbr\mid a\le x < b\right\}$$

    We also define,

    $$\left[a,\infty\right)=\left\{ x\in\bbr\bmid a\le x\right\}$$

!!! def "_Definition_: Closed Interval"

    Let $a, b\in\bbr$, then we define,

    $$\left[a,b\right] = \left\{ x\in\bbr\mid a\le x \le b\right\}$$

##### Complex Numbers

We will not define the complex numbers formally in this course since this is not needed, but for those who know what they are, this is the set notation and definition of them.

!!! def "_Definition_: Complex Numbers"

    $$\bbc = \left\{a + ib \bmid a,b\in\bbr\right\}$$

### Containment and Equality

The main thing we do with any object, is to compare it to other objects, for that we need to have a notion of "equality" between those objects.

#### Containment

Informally, a set is contained in another set, if it contains only part of the elements of that set.

!!! def "_Definition_: Containment"

    Let $A$ and $B$ be sets, such that,

    $$\forall x\left(x\in A\implies x\in B\right)$$

    then we say that "$A$ is contained in $B$", and notate it using $A\subseteq B$ or $B \supseteq A$.

    Moreover, we call $A$ a **subset** of $B$, and we call $B$ a **superset** of $A$.

!!! def "_Definition_: Not Contained"

    Let $A$ and $B$ se sets, such that,

    $$\neg \left(A\subseteq B\right)$$

    then we say that "$A$ is not contained in $B$", and notate it using $A\nsubseteq B$ or $B \nsupseteq A$.

!!! def "_Definition_: Proper Containment"

    Let $A$ and $B$ se sets, such that,

    $$\left(A\subseteq B\right)\land\left(B\nsubseteq A\right)$$
    
    then we say that "$A$ is proper contained in $B$", and notate it using $A\subset B$ or $B \supset A$.

    Moreover, we call $A$ a **proper subset** of $B$, and we call $B$ a **proper superset** of $A$.

!!! mexample "_Example_"

    The following are correct,

    - $\left\{ 1\right\} \nsubseteq\left\{ \left\{ 1\right\} \right\}$
    - $\left\{ 1\right\} \subset\left\{ 1,2\right\}$
    - $\left\{ 0\right\} \nsubseteq\left\{ 6, \bbn,\left\{8\right\}\right\}$

!!! exercise "_Exercise_"

    Prove the following results,

    - $\bbn_+ \subseteq \bbn$
    - $\bbz \subseteq \bbq$
    - $\bbr \subseteq \bbc$
    
    ??? solution

        TODO

!!! thm "_Theorem_: Empty Set is a Subset of Every Set"

    <div id="theorem-empty-set-is-a-subset-of-every-set"></div>
    Let $\mathcal{E}$ be an empty set, and let $A$ be a set, then $\mathcal{E} \subseteq A$.

    ??? proof

        By the definition of a subset, to prove that $\mathcal{E} \subseteq A$ we need to prove the following,

        $$\forall x.\left(x \in \mathcal{E} \implies x \in A\right)$$

        Let $x$ be an object, then we want to prove that,

        $$x \in \mathcal{E} \implies x \in A$$

        Now, notice that by the definition of an empty set it follows that $x \notin \mathcal{E}$, hence the prefix in the implication is false, and by the definition of the implication connective we get that the original claim is true as required.

!!! claim "_Claim_: Containment is Transitive"

    Let $A, B$ and $C$ be sets, then,

    $$\left(A\subseteq B\land B\subseteq C\right)\implies\left(A\subseteq C\right)$$

    ??? proof

        We assume that,

        $$\left(A\subseteq B\right)\land \left(B\subseteq C\right)$$

        meaning that from the definition of containment we know that,

        $$\forall x.\left(x\in A\implies x\in B\right)$$

        and,

        $$\forall x.\left(x\in B\implies x\in C\right)$$

        Now from the definition of containment we have to prove that,

        $$\forall x.\left(x\in A\implies x\in C\right)$$

        Let $x$ be an object such that $x \in A$, then from our assumption we get that, $x \in B$, and again from our assumption we get that $x \in C$, as required.

#### Equality

Now that we know what it means for a set to be contained in another set we can talk about sets being equal, this is because equality of sets means that both sets share the same elements, or formally that they are contained in each other.

Moreover, since this is a basic and useful definition, this is actually an axiom of our mathematical theory.

!!! axiom "_Axiom_: Axiom of Extensionality"

    Let $A$ and $B$ be sets, such that,

    $$\forall x.\left(x\in A\iff x\in B\right)$$

    then we say that $A$ is equal to $B$, and notate it using $A = B$.

!!! exercise "_Exercise_"

    Let $A$ and $B$ be sets, then,

    $$\left(A = B\right) \iff \left(\left(A\subseteq B\right) \land \left(B \subseteq A\right)\right)$$

    ??? solution

        TODO

!!! claim "_Claim_: Uniqueness of the Empty Set"

    Let $A$ and $B$ be empty sets, then $A = B$.

    ??? proof

        We need to prove that $A = B$, from the last exercise it suffices to prove that,

        $$\left(A\subseteq B\right) \land \left(B \subseteq A\right)$$

        Now by the <a href=#theorem-empty-set-is-a-subset-of-every-set>theorem that an empty set is a subset of every set</a> we get that $A \subseteq B$ and $B \subseteq A$ since both are empty sets (we applied the theorem on both) as required.

After proving that all empty sets are equal, we can define a singular universal empty set.

!!! def "_Definition_: The Empty Set"

    We notate the only empty set using $\emptyset$.

    ??? mnote "_Note_"

        It is also common to see the notation $\{\}$ for the empty set.

## Operations on Sets

We talked about sets as if they are singular in their world, but now we want to start talking about different operations we can do on sets.

First of all we want to have a way to visualize all those operations,

!!! mnote "_Note_: Venn Diagram"

    A Venn diagram is a diagram with the sole purpose of showing the relations between different sets. We will draw a set as a circle in the diagram, an element of a set as a point, and we will use color for the topic of the diagram.

!!! mexample "_Example_: Venn Diagram of Containment"

    Let $A$ and $B$ be sets, such that $B\subseteq A$, then we can draw for them the following diagram,
    
    
    ![Venn Diagram of Containment](./introduction_to_set_theory_svgs/containment_venn_diagram.svg){ width="200px" loading=lazy }
    /// caption
    Venn Diagram of Containment
    ///

### Intersection

The first operation we define on sets is the intersection operation that acts like an "and" on two sets.

!!! def "_Definition_: Intersection"

    Let $A$ and $B$ be sets, then,

    $$A\cap B = \left\{x\in A\mid x\in B\right\}$$

    And as a Venn diagram,

    ![Venn Diagram of Intersection](./introduction_to_set_theory_svgs/intersection_venn_diagram.svg){ width="200px" loading=lazy }
    /// caption
    Venn Diagram of Intersection
    ///

!!! mexample "_Example_"

    Try to understand why the following are correct,

    - $\left\{ 1,2,3\right\} \cap\left\{ 3,4,5,6\right\} =\left\{ 3\right\}$
    - $\left\{ \left\{ 1\right\} \right\} \cap\left\{ 1\right\} =\emptyset$
    - $\left\{ 3,4\right\} \cap\left\{ 3,4,5\right\} =\left\{ 3,4\right\}$
    - $\bbn \cap \bbz = \bbn$

!!! claim "_Claim_: Intersection is Associative"

    Let $A, B$ and $C$ be sets, then,

    $$\left(A\cap B\right)\cap C=A\cap\left(B\cap C\right)$$

    ??? proof

        TODO

!!! mnote "_Note_: Without Loss of Generality"

    In the proof above and in a lot of proofs across mathematics, we see a lot of inner repetitions, in those cases we allow ourselves to use a "symmetry argument" or "without los of generality argument" (WLoG), these allow us to assume that some parts of the proof are skippable since they are identical to things we've already proofed. Note that using those arguments requires training and will become simpler with time, and from now on we will use those in the proofs to make them shorter and easier to read but also to allow the reader to familiarize himself with this technic.

!!! claim "_Claim_: Intersection is Commutative"

    Let $A$ and $B$ be sets, then,

    $$A\cap B=B\cap A$$

    ??? proof

        TODO

!!! claim "_Claim_"

    Let $A$ be a set, then,

    $$A\cap A = A$$

    ??? proof

        TODO

!!! exercise "_Exercise_"

    Let $A$ be a set, then,

    $$A\cap \emptyset =\emptyset$$

    ??? solution

        TODO

#### Generalized Intersection

We also want to be able to take the intersection of many sets at once, for that we can use the generalized intersection.

But first we have to define the object on which we take the generalized intersection,

!!! def "_Definition_: Family of Sets"

    A set $\mathcal{F}$ is called a "family of sets", if for all $X \in \mathcal{F}$ we have that $X$ is a set.

Now we can define non formally the generalized intersection as,

!!! def "_Definition_: Generalized Intersection (Non formal)"

    Let $\mathcal{F}$ be a family of sets, then,

    $$\bigcap \mathcal{F} = \left\{x\mid \forall X\in\mathcal{F}.x\in X\right\}$$

The problem we have is that the set on the right of the definition doesn't adhere to our set construction schemes, so to define this properly we have to somehow pick a set from which all the $x$s are from, for that we can try to just pick an arbitrary set and see where it gets us.

!!! thm "_Theorem_: Generalized Intersection is Well Defined"

    Let $\mathcal{F}$ be a family of sets, and let $A, B\in\mathcal{F}$, then,

    $$\left\{x\in A\mid \forall X\in\mathcal{F}.x\in X\right\} = \left\{x\in B\mid \forall X\in\mathcal{F}.x\in X\right\}$$

    ??? proof

        TODO

Now that we've cleared that the choice of set from the family isn't important we can give the full formal definition,

!!! def "_Definition_: Generalized Intersection"

    Let $\mathcal{F}$ be a family of sets, and let $A\in\mathcal{F}$, then,

    $$\bigcap \mathcal{F} = \left\{x\in A\mid \forall X\in\mathcal{F}.x\in X\right\}$$

    We also allow for sugar-syntax,

    - Let $I$ be a set, and let $\left\{A_\lambda \mid \lambda \in I\right\}$ be a family of sets, then,

        $$\bigcap_{\lambda \in I}A_\lambda = \bigcap\left\{A_\lambda \mid \lambda \in I\right\}$$
    
    - Let $\left\{A_i \mid i\in\bbn\right\}$ be a family of sets, then,

        $$\bigcap_{i = 0}^{\infty} A_i = \bigcap_{i \in \bbn} A_i$$

Because we know that the generalized intersection is well defined, we will omit the set $A$ from now on, because it doesn't provide us with any information.

!!! mexample "_Example_"

    Try to understand why the following is true,

    - $\bigcap_{i=0}^{\infty}\left\{ n\in\bbn\mid n\ge i\right\} =\emptyset$
    - $\bigcap_{\varepsilon\in\bbr_{+}}\left[0,\varepsilon\right)=\left\{ 0\right\}$
    - $\bigcap_{n=1}^{\infty}\left(-\frac{1}{n},\frac{1}{n}\right)=\left\{ 0\right\}$

!!! exercise "_Exercise_"

    Let $B$ be a set, and let $\mathcal{F}$ be a family of sets, then,

    $$\left(B\subseteq\bigcap\mathcal{F}\right) \iff \left(\forall X\in\mathcal{F}. B\subseteq X\right)$$

    ??? solution

        TODO

#### Disjoint Sets

!!! def "_Definition_: Disjoint Sets"

    Let $A$ and $B$ be sets, such that,

    $$A\cap B = \emptyset$$

    then, $A$ and $B$ are called **disjoint sets**.

    And as a Venn diagram,

    ![Venn Diagram of Disjoint Sets](./introduction_to_set_theory_svgs/disjoint_sets_venn_diagram.svg){ width="300px" loading=lazy }
    /// caption
    Venn Diagram of Disjoint Sets
    ///

!!! def "_Definition_: Family of Disjoint Sets"

    Let $\mathcal{F}$ be a family of sets, such that,

    $$\bigcap\mathcal{F} = \emptyset$$

    then, $\mathcal{F}$ is called a **family of disjoint sets**.

!!! def "_Definition_: Family of Pairwise Disjoint Sets"

    Let $\mathcal{F}$ be a family of sets, such that,

    $$\forall A, B \in \mathcal{F}. \left(\left(A \ne B\right)\implies \left(A \cap B = \emptyset\right)\right)$$

    then, $\mathcal{F}$ is called a **family of pairwise disjoint sets**.

!!! exercise "_Exercise_: Pairwise Disjoint Implies Disjoint"

    Let $\mathcal{F}$ be a family of pairwise disjoint sets, then, \mathcal{F} is a family of disjoint sets.

    ??? solution

        TODO

### Union

This operation on sets is the union operation, and it acts like a "or" on two sets.

!!! def "_Definition_: Union (Non formal)"

    Let $A$ and $B$ be sets, then,

    $$A\cup B = \left\{x\mid \left(x\in A\right)\lor\left(x\in B\right)\right\}$$

But this definition doesn't adhere to our set construction schemes, hence we need to somehow know in the definition from which set are all the $x$s come from, but this is cyclic problem since the union is exactly the set from which we would have wanted to draw the $x$s from. Because of that, to define this operation in our theory we have to an axiom that allows us to use the union operation,

!!! axiom "_Axiom_: Axiom of Union"

    Let $\mathcal{F}$ be a family of sets, then there exists a set $\mathcal{U}$, such that,

    $$\forall X.\forall x.\left(\left(\left(x \in X\right)\land \left(X \in \mathcal{F}\right)\right) \implies \left(x \in \mathcal{U}\right)\right)$$

    and we call such a set $\mathcal{U}$ a world of $\mathcal{F}$.

Before we define the union operator we want to show that it will be well defined,

!!! thm "_Theorem_: Union is Well Defined"

    Let $A$ and $B$ be sets, and let $\mathcal{U}, \mathcal{V}$ be worlds of $\left\{A, B\right\}$, then,

    $$\left\{x\in \mathcal{U}\mid \left(x\in A\right)\lor\left(x\in B\right)\right\} = \left\{x\in \mathcal{V}\mid \left(x\in A\right)\lor\left(x\in B\right)\right\}$$

    ??? proof

        TODO

And now we can define union formally,

!!! def "_Definition_: Union"

    Let $A$ and $B$ be sets, and let $\mathcal{U}$ be a world of $\left\{A, B\right\}$, then,

    $$A\cup B = \left\{x\in \mathcal{U}\mid \left(x\in A\right)\lor\left(x\in B\right)\right\}$$

    And as a Venn diagram,

    ![Venn Diagram of Union](./introduction_to_set_theory_svgs/union_venn_diagram.svg){ width="200px" loading=lazy }
    /// caption
    Venn Diagram of Union
    ///

Because we know that the union is well defined, we will omit the world $\mathcal{U}$ from now on, because it doesn't provide us with any information.

!!! mexample "_Example_"

    Try to understand why the following are correct,

    - $\left\{ 1,2,3\right\} \cup\left\{ 3,4,5,6\right\} =\left\{ 1,2,3,4,5,6\right\}$
    - $\left\{ \left\{ 1\right\} \right\} \cup\left\{ 1\right\} =\left\{ 1,\left\{ 1\right\} \right\}$
    - $\bbn\cup\bbr=\bbr$
    - $\bbn_{\even}\cup\bbn_{\odd}=\bbn$

!!! claim "_Claim_: Union is Associative"

    Let $A, B$ and $C$ be sets, then,

    $$\left(A\cup B\right)\cup C=A\cup\left(B\cup C\right)$$

    ??? proof

        TODO

!!! claim "_Claim_: Union is Commutative"

    Let $A$ and $B$ be sets, then,

    $$A\cup B=B\cup A$$

    ??? proof

        TODO

!!! claim "_Claim_"

    Let $A$ be a set, then,

    $$A\cup A = A$$

    ??? proof

        TODO

!!! exercise "_Exercise_"

    Let $A$ be a set, then,

    $$A\cup \emptyset = A$$

    ??? solution

        TODO

!!! claim "_Claim_: Union is Distributive Over Intersection"

    Let $A$, $B$ and $C$ be sets, then,

    $$A\cup\left(B\cap C\right)=\left(A\cup B\right)\cap\left(A\cup C\right)$$

    ??? proof

        TODO

!!! exercise "_Exercise_: Intersection is Distributive Over Union"

    Let $A$, $B$ and $C$ be sets, then,

    $$A\cap\left(B\cup C\right)=\left(A\cap B\right)\cup\left(A\cap C\right)$$

    ??? solution

        TODO

#### Generalized Union

We also want to be able to take the union of many sets at once, for that we can use the generalized union.

Non formally we can define the generalized union as,

!!! def "_Definition_: Generalized Union (Non formal)"

    Let $\mathcal{F}$ be a family of sets, then,

    $$\bigcup \mathcal{F} = \left\{x\mid \exists X\in\mathcal{F}.x\in X\right\}$$

But we already saw this problem earlier with the union operator, hence we can solve it here the same way,

!!! thm "_Theorem_: Generalized Union is Well Defined"

    Let $\mathcal{F}$ be a family of sets, and let $\mathcal{U}, \mathcal{V}$ be worlds of $\mathcal{F}$, then,

    $$\left\{x\in\mathcal{U}\mid \exists X\in\mathcal{F}.x\in X\right\} = \left\{x\in\mathcal{V}\mid \exists X\in\mathcal{F}.x\in X\right\}$$

    ??? proof

        TODO

!!! def "_Definition_: Generalized Union"

    Let $\mathcal{F}$ be a family of sets, and let $\mathcal{U}$ be a world of $\mathcal{F}$, then,

    $$\bigcup \mathcal{F} = \left\{x\in\mathcal{U}\mid \exists X\in\mathcal{F}.x\in X\right\}$$

    We also allow for sugar-syntax,

    - Let $I$ be a set, and let $\left\{A_\lambda \mid \lambda \in I\right\}$ be a family of sets, then,

        $$\bigcup_{\lambda \in I}A_\lambda = \bigcup\left\{A_\lambda \mid \lambda \in I\right\}$$
    
    - Let $\left\{A_i \mid i\in\bbn\right\}$ be a family of sets, then,

        $$\bigcup_{i = 0}^{\infty} A_i = \bigcup_{i \in \bbn} A_i$$

Because we know that the generalized union is well defined, we will omit the world $\mathcal{U}$ from now on, because it doesn't provide us with any information.

!!! mexample "_Example_"

    Try to understand why the following is true,

    - $\bigcup_{i=0}^{\infty}\left\{ i\right\} =\bbn$
    - $\bigcup_{i=0}^{\infty}\left(i,i+1\right)=\bbr_{+}\backslash\bbn$
    - Let $\e \in \bbr_+$ then, $\bigcup_{q\in\bbq}\left(q-\e,q+\e\right)=\bbr$

!!! exercise "_Exercise_"

    Let $B$ be a set, and let $\mathcal{F}$ be a family of sets, then,

    $$\left(\bigcup\mathcal{F}\subseteq B\right) \iff \left(\forall X\in\mathcal{F}. X\subseteq B\right)$$

    ??? solution

        TODO

Thw following exercise is very challenging, and hence it's marked with "⭐". This exercise requires understanding of the real numbers and it's relation to the rational numbers.

!!! exercise "_Exercise_⭐"

    Prove the following two results,

    - $\bigcap_{n\in\bbn_{+}}\left(\bigcup_{q\in\bbq}\left(q-\frac{1}{n},q+\frac{1}{n}\right)\right)=\bbr$
    - $\bigcup_{n\in\bbn_{+}}\left(\bigcap_{q\in\bbq}\left(q-\frac{1}{n},q+\frac{1}{n}\right)\right)=\bbq$

    ??? solution

        TODO

#### Disjoint Union

!!! def "_Definition_: Disjoint Union"

    Let $A$ and $B$ be disjoint sets, then,

    $$A\uplus B = A\cup B$$

    And as a Venn diagram,

    ![Venn Diagram of Disjoint Union](./introduction_to_set_theory_svgs/disjoint_union_venn_diagram.svg){ width="300px" loading=lazy }
    /// caption
    Venn Diagram of Disjoint Union
    ///

!!! def "_Definition_: Generalized Disjoint Union"

    Let $\mathcal{F}$ be a family of pairwise disjoint sets, then,

    $$\biguplus\mathcal{F} = \bigcup\mathcal{F}$$

    We also allow for sugar-syntax,

    - Let $I$ be a set, and let $\left\{A_\lambda \mid \lambda \in I\right\}$ be a family of pairwise disjoint sets, then,

        $$\biguplus_{\lambda \in I}A_\lambda = \biguplus\left\{A_\lambda \mid \lambda \in I\right\}$$
    
    - Let $\left\{A_i \mid i\in\bbn\right\}$ be a family of pairwise disjoint sets, then,

        $$\biguplus_{i = 0}^{\infty} A_i = \biguplus_{i \in \bbn} A_i$$

!!! mexample "_Example_"

    Try to understand why the following is true,

    - $\biguplus_{z\in\bbz}\left(z,z+1\right)=\bbr\backslash\bbz$
    - $\left\{ 1\right\} \uplus\left\{ 2\right\} =\left\{ 1,2\right\}$
    - $\left\{ \left\{ 1\right\} \right\} \uplus\left\{ 1\right\} =\left\{ 1,\left\{ 1\right\} \right\}$

!!! mnote "_Note_"

    Let $A$ and $B$ be finite disjoint sets, then,

    $$\left|A\uplus B\right| = \left|A\right| + \left|B\right|$$

### Difference

!!! def "_Definition_: Difference"

    Let $A$ and $B$ be sets, then,

    $$A \backslash B = \left\{x\in A\mid x\notin B\right\}$$

    And as a Venn diagram,

    ![Venn Diagram of Difference](./introduction_to_set_theory_svgs/difference_venn_diagram.svg){ width="200px" loading=lazy }
    /// caption
    Venn Diagram of Difference
    ///

    ??? mnote "_Note_"

        The "difference" operation may also be called "relative complement".

        And the notation $A - B$ may be used instead of $A\backslash B$.

!!! mexample "_Example_"

    Try to understand why the following is true,

    - $\left\{ 1,2,3\right\} \backslash\left\{ 3,4,5,6\right\} =\left\{ 1,2\right\}$
    - $\left\{ \left\{ 1\right\} \right\} \backslash\left\{ 1\right\} =\left\{ \left\{ 1\right\} \right\}$
    - $\left\{ 3,4\right\} \backslash\left\{ 3,4,5\right\} =\emptyset$
    - $\bbn\backslash\bbn_{+}=\left\{ 0\right\}$

!!! def "_Definition_: Irrational Numbers"

    We define the **irrational numbers** to be the following set, $\bbr \backslash \bbq$.

!!! claim "_Claim_"

    Let $A$ be a set, then,

    $$A\backslash A = \emptyset$$

    ??? proof

        TODO

!!! exercise "_Exercise_"

    Let $A$ be a set, then,

    $$A\backslash \emptyset = A$$

    ??? solution

        TODO

!!! claim "_Claim_"

    Let $A$ and $B$ be sets, then, the following are equivalent (TFAE),

    - $A\subseteq B$
    - $A\cap B = A$
    - $A\backslash B = \emptyset$
    - $A\cup B = B$

    ??? proof

        TODO

!!! mnote "_Note_"

    Let $A$ and $B$ be finite sets, such that $B\subseteq A$, then,

    $$\left|A\backslash B\right| = \left|A\right| - \left|B\right|$$

#### Complement

!!! def "_Definition_: Complement"

    Let $A$ be a set, and let $\mathcal{U}$ be a world of $\left\{A\right\}$, then,

    $$A^{{\mathcal C}}={\mathcal U}\backslash A$$

    And as a Venn diagram,

    ![Venn Diagram of Complement](./introduction_to_set_theory_svgs/complement_venn_diagram.svg){ width="200px" loading=lazy }
    /// caption
    Venn Diagram of Complement
    ///

!!! claim "_Claim_: De Morgan's laws"

    Let $A, B$ and $C$ be sets, and let $\mathcal{U}$ be a world of $\left\{A, B\right\}$, then,

    - $\left(A\cup B\right)^{{\cal C}}=A^{{\cal C}}\cap B^{{\cal C}}$
    - $\left(A\cap B\right)^{{\cal C}}=A^{{\cal C}}\cup B^{{\cal C}}$
    - $A\backslash\left(B\cup C\right)=\left(A\backslash B\right)\cap\left(A\backslash C\right)$
    - $A\backslash\left(B\cap C\right)=\left(A\backslash B\right)\cup\left(A\backslash C\right)$

    ??? proof

        TODO

#### Symmetric Difference

!!! def "_Definition_: Symmetric Difference"

    Let $A$ and $B$ be sets, then,

    $$A\triangle B=\left(A\backslash B\right)\cup\left(B\backslash A\right)$$

    And as a Venn diagram,

    ![Venn Diagram of Symmetric Difference](./introduction_to_set_theory_svgs/symmetric_difference_venn_diagram.svg){ width="200px" loading=lazy }
    /// caption
    Venn Diagram of Symmetric Difference
    ///

!!! mexample "_Example_"

    Try to understand why the following is true,

    - $\left\{ 1,2,3\right\} \triangle\left\{ 3,4,5,6\right\} =\left\{ 1,2,5,6\right\}$
    - $\left\{ \left\{ 1\right\} \right\} \triangle\left\{ 1\right\} =\left\{ \left\{ 1\right\} ,1\right\}$
    - $\left\{ 3,4\right\} \triangle\left\{ 3,4,5\right\} =\left\{ 5\right\}$

!!! exercise "_Exercise_: Symmetric Difference is Associative"

    Let $A, B$ and $C$ be sets, then,

    $$\left(A\triangle B\right)\triangle C=A\triangle\left(B\triangle C\right)$$

    ??? solution

        TODO

!!! claim "_Claim_: Symmetric Difference is Commutative"

    Let $A$ and $B$ be sets, then,

    $$A\triangle B=B\triangle A$$

    ??? proof

        TODO

!!! claim "_Claim_"

    Let $A$ be a set, then,

    $$A\triangle A=\emptyset$$

    ??? proof

        TODO

!!! exercise "_Exercise_"

    Let $A$ be a set, then,

    $$A\triangle\emptyset=A$$

    ??? solution

        TODO

!!! exercise "_Exercise_"

    Let $A, B$ and $C$ be sets, then,

    $$\left(A\triangle B=B\triangle C\right)\implies \left(A=C\right)$$

    ??? solution

        TODO

### Power Set

!!! def "_Definition_: Power Set (Non formal)"

    Let $A$ be a set, then,

    $$\mathcal{P}\left(A\right)=\left\{ B\mid B\subseteq A\right\}$$

But this definition doesn't adhere to our set construction schemes, hence we need to somehow know in the definition from which set are all the $B$s come from, but this is cyclic problem since the power set is exactly the set from which we would have wanted to draw the $B$s from. Because of that, to define this operation in our theory we have to an axiom that allows us to use the power set,

!!! axiom "_Axiom_: Axiom of Power Set"

    Let $A$ be a set, then there exists a set $\mathcal{Q}$, such that,

    $$\forall X. \left(\left(X\subseteq A\right)\implies\left(X\in\mathcal{Q}\right)\right)$$

    and we call such a set $\mathcal{Q}$ a power set world of $A$.

Before we define the power set we want to show that it will be well defined,

!!! thm "_Theorem_: Power Set is Well Defined"

    Let $A$ be a set, and let $\mathcal{Q}, \mathcal{R}$ be power set worlds of $A$, then,

    $$\left\{ B\in \mathcal{Q}\mid B\subseteq A\right\} = \left\{ B\in \mathcal{R}\mid B\subseteq A\right\}$$

    ??? proof

        TODO

And now we can define the power set formally,

!!! def "_Definition_: Power Set"

    Let $A$ be a set, and let $\mathcal{Q}$ be a power set world of $A$, then,

    $$\mathcal{P}\left(A\right) = \left\{ B\in \mathcal{Q}\mid B\subseteq A\right\}$$

Because we know that the union is well defined, we will omit the power set world $\mathcal{Q}$ from now on, because it doesn't provide us with any information.

!!! mexample "_Example_"

    Try to understand why the following is true,

    - $\mathcal{P}\left(\emptyset\right)=\left\{ \emptyset\right\}$
    - $\mathcal{P}\left(\left\{ 1,2\right\} \right)=\left\{ \emptyset,\left\{ 1\right\} ,\left\{ 2\right\} ,\left\{ 1,2\right\} \right\}$

!!! exercise "_Exercise_"

    Let $A$ and $B$ be sets, then,

    $$\left(A\subseteq B\right)\iff\left(\mathcal{P}\left(A\right)\subseteq\mathcal{P}\left(B\right)\right)$$

    ??? proof

        TODO

!!! thm "_Theorem_"

    Let $A$ be a finite set, then,

    $$\left|\mathcal{P}\left(A\right)\right| = 2^{\left|A\right|}$$

    ??? proof

        TODO

!!! exercise "_Exercise_"

    Compute the following sets (meaning find a canonical way to write them without the power set),

    - $\left\{ X\backslash\left\{ 0\right\} \mid X\in\mathcal{P}\left(\bbn\right)\right\}$
    - $\left\{ \left\{ 0\right\} \backslash X\mid X\in\mathcal{P}\left(\bbn\right)\right\}$
    - Let $A$ be a set, what is $\bigcup\mathcal{P}\left(A\right)$?
    - Let $A$ be a set, what is $\bigcap\mathcal{P}\left(A\right)$?

    ??? solution

        TODO
