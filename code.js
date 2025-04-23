function are_isomorphic(graph1, graph2)
{
    // If the dimensions are mismatched, they can't be isomorphic,
    // return false, and exit.
    if(graph1.length != graph2.length)
    {
        return false;
    }

    // Try all permutations of graph1, starting a label 0, and compare to graph2.
    return permuteAndCompare(graph1, graph2, 0);
}

// Permute through labels currentIndex to vertexCount - 1 of graph1
// and compares to graph2 as labels are fixed, recursively.
function permuteAndCompare(graph1, graph2, currentIndex)
{
    var vertexCount = graph1.length;

    // Base case, every label 0 to vertexCount-1 has been assigned.
    if(currentIndex == vertexCount)
    {
        return compareGraphs(graph1, graph2);
    }

    // Swap currentIndex label with each label >= currentIndex....
    for(var swapIndex = currentIndex; swapIndex < vertexCount; swapIndex++)
    {
        // Swap rws and columns of currentIndex and swapIndex.
        permuteGraph(graph1, currentIndex, swapIndex);

        // Recursively fix the next label.
        if(permuteAndCompare(graph1, graph2, currentIndex + 1))
        {
            return true; // Match in this recursion path.
        }

        // Revert the swap for the next label swap.
        permuteGraph(graph1, currentIndex, swapIndex);
    }

    // None of the permutations in this recursion path matched.
    return false;
}

// Relabel vertices labelA and labelB by swapping the rows
// and columns of the matrix.
function permuteGraph(graph, labelA, labelB)
{
    // Swap rows.
    [graph[labelA], graph[labelB]] = [graph[labelB], graph[labelA]];
    // Swap columns, so the incoming edge pattern is correct.
    for(var rowIndex = 0; rowIndex < graph.length; rowIndex++)
    {
        [graph[rowIndex][labelA], graph[rowIndex][labelB]] =
            [graph[rowIndex][labelB], graph[rowIndex][labelA]];
        console.log(JSON.stringify(graph)); // Remove.
    }
}

function compareGraphs(graph1, graph2)
{
    // For each row of graph1...
    for(var row = 0; row < graph1.length; row++)
    {
        // For each element of said row...
        for(var col = 0; col < graph1.length; col++)
        {
            // If the elements in the corresponding position of graph2
            // don't match, the graphs are not the same.
            if(graph1[row][col] != graph2[row][col])
            {
                return false;
            }
        }
    }

    // Excellent, a match!
    return true;
}

var graph1 = [[0,1,0,1],
            [1,0,1,0],
            [0,1,1,1],
            [1,0,1,0]];

var graph2 = [[1,1,0,1],
            [1,0,1,0],
            [0,1,1,1],
            [1,0,1,1]];

are_isomorphic(graph1, graph2);