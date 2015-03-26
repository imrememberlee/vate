/**
 * VoteController
 *
 * @description :: Server-side logic for managing votes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	new: function(req, res) {
		 Items.find().exec(function(err, items) {});
             res.view('vote/new',items: items);
	},


	results: function(req, res) {
		var currents = {
      			item: req.param('item'),
      			vote: req.param('vote'),
      			}
    		Currentresult.create(currents).done(function(err, current) {
      			if (err) return res.send(err, 500);
      		//Poll.publishCreate({ id: poll.id, title: poll.title });
      		res.view('admin/new');
    		});
	}

};

