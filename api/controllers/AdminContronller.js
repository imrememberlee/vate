/*---------------------
	:: Admin
	-> controller
---------------------*/


var AdminController = {

	new: function(req, res) {
    		var items_obj = {
      			item: req.param('item'),
      			description: req.param('description')
    		};
    		
    		Items.create(items_obj).done(function(err, poll) {
      			if (err) return res.send(err, 500);
      		//res.view('item/add', { poll_id: poll.id, title: 'Add items' });


              Items.find().exec(function(err, items) {});
              Currentresult.find().exec(function(err, currentresult) {});

      		res.view('admin/new',items: items,currentresult:currentresult);
      		//res.end(items_obj.item);
    		});
  	},
       cast: function(req, res) {
            var item = req.param('item');
            if(req.cookies.instapoll_p && _.contains(req.cookies.instapoll_p.split(','), item))
            return res.redirect('/admin/results/'+item);
            Poll.findOne(req.param('item')).populate('items').done(function(err, item) {
            res.view();
        });
      },
  	 subscribe: function(req, res) {
    		Item.watch(req.socket);
    		res.send(200);
    	}


};
