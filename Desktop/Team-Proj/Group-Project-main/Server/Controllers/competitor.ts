import express, { Request, Response, NextFunction } from 'express';

// Clothing Model
import Competitor from '../Models/competitor';

// display page functions
export function DisplayCompetitorListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.competitor.find()
    Competitor.find(function(err, competitorCollection){
        if(err)
        {
            return console.error(err);
        }

        res.render('index', {title: 'Competitor List', page: 'competitor-list', competitor: competitorCollection});
    });
}

export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    console.log(id);

    Competitor.findById(id, {}, {}, (err, competitorItemToEdit) => 
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // show the edit page

        res.render('index', {title: 'Edit', page: 'edit', competitor: competitorItemToEdit});
    });
}

export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
        res.render('index', {title: 'Add', page: 'edit', competitor: ''});
}

// Process (E)dit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Competitor Item
    let updatedCompetitorItem = new Competitor
    ({
       "_id": id,
      "fullname": req.body.fullname,
      "description": req.body.description
    });
  
    // find the competitor item via db.competitor.update({"_id":id}) and then update
    Competitor.updateOne({_id: id}, updatedCompetitorItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/competitor-list');
    });
}

// Process (C)reate page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
  // instantiate a new Competitor
  let newCompetitor = new Competitor
  ({
      "fullname": req.body.fullname,
      "description": req.body.description
  });

  // db.competitor.insert({competitor data is here...})
  Competitor.create(newCompetitor, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/competitor-list');
  });
}

// Process (D)elete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.contact.remove({"_id: id"})
  Competitor.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/competitor-list');
  });
}