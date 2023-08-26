import {BaseClient} from "../base.client";
import {EmailSendResponse} from "./email-send.response";
import {EmailMimeParams} from "./email-mime.params";
import {ArchiveSearchParams} from "./archive-search.params";
import {ArchiveSearchResponse} from "./archive-search.response";
import {ArchiveEmailResponse} from "./archive-email.response";
import {ArchiveEmailParams} from "./archive-email.params";
import {EmailSendParams} from "./email-send.params";
import * as path from "path";
import * as fs from "fs";
import {EmailFile} from "./email-file";

class EmailClient extends BaseClient {
  async send(params:EmailSendParams):Promise<EmailSendResponse>{
    return this.request.post<EmailSendResponse>('/email/send', params as unknown as Record<string, unknown>);
  };
  async mime(params:EmailMimeParams):Promise<EmailSendResponse>{
    return this.request.post<EmailSendResponse>('/email/mime', params as unknown as Record<string, unknown>);
  };
  async archiveSearch(params:ArchiveSearchParams):Promise<ArchiveSearchResponse>{
    return this.request.post<ArchiveSearchResponse>('/archive/search', params as unknown as Record<string, unknown>);
  };
  async archiveEmail(params:ArchiveEmailParams):Promise<ArchiveEmailResponse>{
    return this.request.post<ArchiveEmailResponse>('/archive/email', params as unknown as Record<string, unknown>);
  };

  async readAttachment(src:string, mimetype:string):Promise<EmailFile>{
    const fullPath = path.resolve(src);
    const filename = path.parse(fullPath).base;
    return new Promise<EmailFile>((resolve,reject) => {
      fs.readFile(fullPath,{encoding: 'base64'},(err,fileblob)=>{
        if(err){
          return reject(err);
        }
        resolve({
          filename,
          fileblob,
          mimetype,
        })
      },)
    })
  }
}

export {EmailClient};