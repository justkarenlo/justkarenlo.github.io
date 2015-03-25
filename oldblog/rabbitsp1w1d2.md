12/9/14
YIELD IN THE NAME OF LOVE BEFORE YOU BREAK...

Oh hey. Don't like my change to the lyrics? You shouldn't. It's definitely less effective compared to STOP IN THE... but when IS yield most effective? (you like that segue just now??)
Answer: when yield is used in a method to take in a block.
What is it? Yield
Why we use it? Mallebility **sp?

It's like an indicator that a block can be added to the method you've called. This is actually implicit in a lot of our enumerable methods that we've been using.

Because the innards of a program can be updated, this allows us to be able to reuse the method in various settings.

Here's an example:

def benchmark
start_time = Time.now
yield if block_given?
end_time = Time.now
program_run_time = end_time - start_time
return program_run_time
end

benchmark {
  "apples"* 1000

}



if block_given were missing, anytime the benchmark method were to be called and didn't include a block, it would raise an error. This block_given? method is a specific method that works for yield.

