# User inputs root note
# Program returns maor scale (campo harmonico)

def root_note_input
  puts "What is the root note?"
  print "> "
  root_note = gets.chomp
  return root_note
end

def build_scale(root_note)
  notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
  scale_intervals = "TTSTTTS"
  scale_build = []
  scale_pos = notes.index(root_note) #start scale at root note
  scale_intervals.each_char do |char|
    scale_build << notes[scale_pos]
    char == "T" ? scale_pos += 2 : scale_pos += 1
    scale_pos -= 12 if scale_pos >= 12
  end
  return scale_build
end

build_scale(root_note_input)


