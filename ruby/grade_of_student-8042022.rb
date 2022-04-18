class Total_students
  
#collecting the data of the student.
  def student_list_data()

    print "How many students data you want to enter?: "
    student_count = gets.chomp.to_i

    @@students_data = Hash.new { |h, k| h[k] = [] }
    
    while student_count >= 1 do
      print "Please enter the grade of the student: "
      student_grade = gets.chomp.to_i

      print "Please enter the First-name of the student: "
      student_name = gets.chomp  

      if @@students_data.has_value? student_name
        raise "The name already exist."
      else
        # student_name_array << student_name
        @@students_data[student_grade] << student_name
      end
      student_count -= 1
    end
    return @@students_data
  end

# # Adding Jim to grade 2
  def adding_new_name()
    print "Please enter the grade of the student: "
    student_grade = gets.chomp.to_i

    print "Please enter the First-name of the student: "
    student_name = gets.chomp  
    @@students_data[student_grade].push(student_name)
        
    return @@students_data
  end

# # displaying the list of student enrolled
  def list_of_student_enrolled()

    @@students_data.each do |grade, students|
      puts "Grade #{grade}: #{students.map{|name|name.capitalize}.sort}."
    end    
  end

end

#collecting the data of the student.
total_student_list = Total_students.new
puts total_student_list.student_list_data()

# # Adding Jim to grade 2
adding_jim_to_list = Total_students.new
puts adding_jim_to_list.adding_new_name()

# # displaying the list of student enrolled
student_enrollement_list = Total_students.new
student_enrollement_list.list_of_student_enrolled()
