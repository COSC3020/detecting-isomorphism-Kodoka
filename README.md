# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

## My Runtime

I took the brute force approach here, so in the worst case, my algorithm
has the potential to generate $n!$ permutations of graph1, as each label
has the potential to be rearranged and swapped with others in $(n * (n-1) *
(n - 2) * ... * 2 * 1)$ ways.  

For each of those permutations, we then compare graph1 and graph2 along
their rows and columns giving us a time complexity of $n * n$ or $n^2$.  

As this complexity is nested, my algrotihm has a final, really bad, worst
case time complexity of $\Theta(n!n^2)$.  

## Sources

I watched the following for help with adjacency matrix isomorphism, and
understanding how to permute my inputs:  

https://www.youtube.com/watch?v=UCle3Smvh1s  

## Plagiarism Notice

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
