class Player < ActiveRecord::Base
  def average
    all_scores = self.scores.split(',').map {|n| n.to_i}
    (all_scores.sum.to_f / all_scores.size).round(2)
  end
end
