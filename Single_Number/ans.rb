# @param {Integer[]} nums
# @return {Integer}
def single_number(arr)
  hash = Hash.new(0)
   newArr = []
   arr.each { |num| hash[num] += 1 }
  
   hash.each do |k,v|
     if v == 1
       return k
     end
   end
 
 
 end