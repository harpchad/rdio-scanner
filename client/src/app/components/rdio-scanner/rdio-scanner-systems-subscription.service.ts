import { Injectable } from '@angular/core';
import { Subscription } from 'apollo-angular';
import gql from 'graphql-tag';

export interface RdioScannerAlias {
    name?: string;
    uid?: number;
}

export interface RdioScannerSystem {
    id?: string;
    aliases?: RdioScannerAlias[];
    name?: string;
    system?: number;
    talkgroups?: RdioScannerTalkgroup[];
}

export interface RdioScannerTalkgroup {
    alphaTag?: string;
    dec?: number;
    description?: string;
    group?: string;
    mode?: string;
    tag?: string;
}

export interface RdioScannerSystemsSubscriptionResponse {
    rdioScannerSystems: RdioScannerSystem[];
}

@Injectable({
    providedIn: 'root',
})
export class AppRdioScannerSystemsSubscriptionService extends Subscription<RdioScannerSystemsSubscriptionResponse> {
    document = gql`
        subscription rdioScannerSystems {
            rdioScannerSystems {
                id
                aliases {
                    name
                    uid
                }
                name
                system
                talkgroups {
                    alphaTag
                    dec
                    description
                    group
                    mode
                    tag
                }
            }
        }
    `;
}
