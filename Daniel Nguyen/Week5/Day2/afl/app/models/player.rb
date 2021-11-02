class Player < ActiveRecord::Base
  def scores_as_i
    all_scores = self.scores.split(',').map {|n| n.to_i}
  end

  def average
    (scores_as_i.sum.to_f / scores_as_i.size).round(2)
  end
end
