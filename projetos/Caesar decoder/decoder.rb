def readfile(filepath)
  text = ''
  file_obj = File.new(filepath, 'r')
  while (line = file_obj.gets)
    text += line
  end
  file_obj.close
  text = text.gsub(/[^a-zA-Z]/, '').gsub(/\d/, '').downcase
  return text
end

def mean(array)
  array.inject(0) { |sum, x| sum += x } / array.size.to_f
end

def stdev(array)
  m = mean(array)
  variance = array.inject(0) { |variance, x| variance += (x - m)**2 }
  return Math.sqrt(variance / (array.size - 1)).round(2)
end

def char_dist(text)
  dist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  text.each_char do |char|
    dist[char.ord - 97] += 1
  end

  dist.map! { |count| (100 * count.to_f / text.length).round(1) }
end

def text_stdev(dist)
  en_distribution = [8.2, 1.5, 2.8, 4.2, 12.7, 2.2, 2.0, 6.1, 7.0, 0.2, 0.8, 4.0, 2.4, 6.7, 7.5, 1.9, 0.1, 6.0, 6.3, 9.1, 2.8, 1.0, 2.4, 0.2, 2.0, 0.1]
  dist.map! { |occ| (occ - en_distribution[dist.index(occ)]).abs }

  return stdev(dist)
end

def shift_check_caesar(text)
  stdev_collection = []
  new_text = ''
  for i in 0..25
    text.each_char do |char|
      new_text += (char.ord - i + (char.ord - i < 97 ? 26 : 0)).chr
    end
    stdev_collection[i] = text_stdev(char_dist(new_text))
    new_text = ''
  end
  return stdev_collection.index(stdev_collection.min)
end

def translate(cipher_text)
  translated_text = ""
  shift = shift_check_caesar(cipher_text)
  cipher_text.each_char do |char|
    translated_text += (char.ord - shift + (char.ord - shift < 97 ? 26 : 0)).chr
  end
  return translated_text
end

p translate(readfile('texto.txt'))


