!!! warning "This page is still under construction"

In set theory, the central object we study is (surprisingly) sets. Despite being the central object in the field, this course will not give formal definitions of this object. This is because mathematics, like any branch, is based on definitions and axioms that we agree are correct and from there we progress. Therefore, here we will use sets naively and intuitively without delving into the axioms according to which they behave. (But this is no excuse for non-formalism! Everything will still be formal and precise.)

We also note that 

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

    Let $A$ be a set, and let $\varphi$ be a predicate over $A$, then we can build a set as,

    $$\{x\in A\mid \varphi\left(x\right)\}$$

    ??? mnote "_Note_"

        The "schema of separation" may also be called "schema of specification", "schema of restricted comprehension" or "set-builder notation".

!!! def "_Definition_: Element Belongs to a Set Constructed Using the Schema of Separation"

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

    There exists a predicate $\varphi\left(x\right)$ such that $\{x \mid \varphi\left(x\right)\}$ isn't a set.

    ??? proof

        TODO
