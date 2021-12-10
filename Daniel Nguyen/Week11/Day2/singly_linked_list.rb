require 'pry'

class SinglyLinkedList

  class Node
    attr_accessor :value, :next

    def initialize value=nil
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize value=nil
    @head = Node.new(value) unless value.nil?
  end

  def prepend value
    new_node = Node.new value
    new_node.next = @head
    @head = new_node # the new node is the new head node
  end

  def append value
    last.next = Node.new value
  end

  def last
    current_node = @head
    while current_node && current_node.next
      current_node = current_node.next
    end
    current_node
  end

  # remove the first node
  def remove
    @head = @head.next
  end

  # alias: .remove
  def shift
    remove
  end

  def insert_after node, new_value
    new_node = Node.new new_value
    new_node.next = node.next
    node.next = new_node
  end

  # return the node with the matching value, or nil
  def find value
    current_node = @head
    until current_node.value == value
      if current_node.next.nil?
        return nil
      else
        current_node = current_node.next
      end
    end
    current_node
  end

  # Tricky
  def reverse #non-destructive
    reversed = []
    current_node = @head
    while current_node
      reversed.unshift current_node
      current_node = current_node.next
    end
    reversed
  end

  # Trickier
  def reverse! # destructive
  end

  # Trickiest -- how do you accept/invoke a do/end block?
  def each function

  end
  # bros.each do |b|
  # end

  # Bonus: .map, .reduce, .select, .reject, .inject, .length AKA .size AKA .count
  # Bonus bonus: .at_index(3) # equivalent bros[3]
  def at_index i
    current_node = @head
    so_far = []
    while so_far.size < i

    end
  end

end

bros = SinglyLinkedList.new 'Groucho'
bros.append 'Harpo'
bros.append 'Chico'
bros.append 'Gummo'
bros.append 'Zeppo'

binding.pry
