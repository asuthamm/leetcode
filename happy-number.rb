# @param {Integer} n
# @return {Boolean}
def is_happy(n)
  if n == (2..7)
    return false
  end

  ans = n.digits.map { |n| n**2 }.sum

  if ans > 6
    is_happy(ans)
  elsif ans == 1
    true
  else
    false
  end
end